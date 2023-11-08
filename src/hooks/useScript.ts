import { useEffect } from "react";
import useAsync from "./useAsync";

type ScriptLoadEvent = Event & { target: HTMLScriptElement };

interface ScriptState {
  loading: boolean;
  error?: ScriptLoadError;
}

class ScriptLoadError extends Error {
  event?: ErrorEvent;

  constructor(message: string, event?: ErrorEvent) {
    super(message);
    this.name = "ScriptLoadError";
    this.event = event;
  }
}

export default function useScript(url: string): ScriptState {
  const { loading, error } = useAsync<ScriptLoadEvent>(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener("load", (event) => resolve(event as ScriptLoadEvent));
      script.addEventListener("error", (event) => {
        const errorEvent = event as ErrorEvent;
        reject(new ScriptLoadError(`Failed to load script: ${url}`, errorEvent));
      });

      document.body.appendChild(script);
    });
  }, [url]);

  useEffect(() => 
    // Cleanup the dynamically added script when the component unmounts
     () => {
      const existingScript = document.querySelector(`script[src="${url}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    }
  , [url]);

  return { loading, error };
}
