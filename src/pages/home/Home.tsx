import React, { useEffect, useState } from "react";
import ReactFlowHorizontal from "./ReactFlowHorizontal";
import { node, edge, node1, edge1 } from "./constant"
import FilterPanel from "./FilterPanel";
import { BiFilterAlt } from "react-icons/bi";
import SideBarIvr from "../sideBar/SideBarIvr";
import LoginCard from "../../components/LoginCard";
import { useAppSelector } from "../../store";

const nodes: any = [
  {
    id: "n-1",
    position: { x: 1, y: 1 },
    data: {
      label: "Start",
      description: "This is the starting point",
      pct: "79.53",
      number: "14,533",
      rank: 1,
      isActive: true,
      isConnectableLeft: false,
    }
  },
  {
    id: "n-2",
    position: { x: 2, y: 1 },
    data: {
      label: "Node-2",
      description: "This is the Node 2",
      pct: "87.36",
      number: "26,235",
      rank: 5,
      isActive: false
    }
  },
  {
    id: "n-3",
    position: { x: 2, y: 2 },
    data: {
      label: "Node-3",
      description: "This is the Node 3",
      pct: "56.9",
      number: "10,235",
      rank: 4,
      isActive: true
    }
  },
  {
    id: "n-4",
    position: { x: 2, y: 3 },
    data: {
      label: "Node-4",
      description: "This is the Node 4",
      pct: "45.39",
      number: "4512",
      rank: 3,
      isActive: true
    }
  },
  {
    id: "n-5",
    position: { x: 3, y: 1 },
    data: {
      label: "Node-5",
      description: "This is the Node 5",
      pct: "56.38",
      number: "4568",
      rank: 2,
      isActive: false
    }
  },
  {
    id: "n-6",
    position: { x: 3, y: 2 },
    data: {
      label: "Node-6",
      description: "This is the Node 6",
      pct: "56.53",
      number: "5,456",
      rank: 7,
      isActive: true
    }
  },
  {
    id: "n-7",
    position: { x: 4, y: 1 },
    data: {
      label: "Node-7",
      description: "This is the Node 7",
      pct: "95.53",
      number: "18,789",
      rank: 7,
      isActive: true,
      isConnectableRight: false,
    }
  },
]

const nodes1: any = [
  {
    id: "start",
    position: { x: 1, y: 1 },
    data: {
      label: "Start",
      description: "The starting point of the IVR journey",
      pct: "79.53",
      number: "14,533",
      rank: 1,
      isActive: true,
      isConnectableLeft: false,
    }
  },
  {
    id: "welcome-message",
    position: { x: 2, y: 1 },
    data: {
      label: "Welcome Message",
      description: "Play a welcome message to the caller",
      pct: "87.36",
      number: "26,235",
      rank: 5,
      isActive: false
    }
  },
  {
    id: "menu-options",
    position: { x: 3, y: 1 },
    data: {
      label: "Menu Options",
      description: "Present menu options to the caller",
      pct: "56.9",
      number: "10,235",
      rank: 4,
      isActive: true
    }
  },
  {
    id: "option-1",
    position: { x: 4, y: 1 },
    data: {
      label: "Option 1",
      description: "Handle caller's selection for Option 1",
      pct: "45.39",
      number: "4512",
      rank: 3,
      isActive: true
    }
  },
  {
    id: "option-2",
    position: { x: 5, y: 1 },
    data: {
      label: "Option 2",
      description: "Handle caller's selection for Option 2",
      pct: "56.38",
      number: "4568",
      rank: 2,
      isActive: false
    }
  },
  {
    id: "end",
    position: { x: 6, y: 1 },
    data: {
      label: "End",
      description: "End of the IVR journey",
      pct: "56.53",
      number: "5,456",
      rank: 7,
      isActive: true,
      isConnectableRight: false,
    }
  }

]

const edges: any = [
  {
    id: "e-12",
    source: 'n-1',
    target: 'n-2',
    label: 'route-12',
    data: {
      weight: 0.1,
    }
  },
  {
    id: "e-13",
    source: 'n-1',
    target: 'n-3',
    label: 'route-13',
    data: {
      weight: 0.2,
    }
  },
  {
    id: "e-14",
    source: 'n-1',
    target: 'n-4',
    label: 'route-14',
    data: {
      weight: 0.7,
    }
  },
  {
    id: "e-25",
    source: 'n-2',
    target: 'n-5',
    label: 'route-25',
    data: {
      weight: 0.4,
    }
  },
  {
    id: "e-35",
    source: 'n-3',
    target: 'n-5',
    label: 'route-35',
    data: {
      weight: 0.7,
    }
  },
  {
    id: "e-45",
    source: 'n-4',
    target: 'n-6',
    label: 'route-45',
    data: {
      weight: 1.5,
    }
  },
  {
    id: "e-57",
    source: 'n-5',
    target: 'n-7',
    label: 'route-57',
    data: {
      weight: 1,
    }
  },
  {
    id: "e-67",
    source: 'n-6',
    target: 'n-7',
    label: 'route-67',
    data: {
      weight: 2,
    }
  },
]

const edges1: any = [
  {
    id: "edge-1",
    source: 'start',
    target: 'welcome-message',
    // label: 'route-12',
    data: {
      weight: 0.1,
    }
  },
  {
    id: "edge-2",
    source: 'welcome-message',
    target: 'menu-options',
    // label: 'route-13',
    data: {
      weight: 0.2,
    }
  },
  {
    id: "edge-3",
    source: 'menu-options',
    target: 'option-1',
    // label: 'route-14',
    data: {
      weight: 0.7,
    }
  },
  {
    id: "edge-4",
    source: 'menu-options',
    target: 'option-2',
    // label: 'route-25',
    data: {
      weight: 0.4,
    }
  },
  {
    id: "edge-5",
    source: 'option-1',
    target: 'end',
    // label: 'route-35',
    data: {
      weight: 0.7,
    }
  },
  {
    id: "edge-6",
    source: 'option-2',
    target: 'end',
    // label: 'route-45',
    data: {
      weight: 1.5,
    }
  }
]

function Home() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const { sideBarToggle } = useAppSelector((d) => d.sidebarSlice);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the timeout to 3 seconds (3000 milliseconds)

    return () => {
      clearTimeout(timeout); // Clear the timeout when the component is unmounted
    };
  }, []);


  return (
    <div className="flex h-full">

      <div className="absolute right-0 m-2 bg-[#000204] p-2 rounded-[12px]">
        <button
          type="button"
          onClick={toggleSidebar}
          className="text-white bg-red "
        >
          {!isOpen && (
            <BiFilterAlt
              data-testid="hamburgerIcon"
              size={28}
              className="cursor-pointer "
            />
          )}
        </button>

        {/* <SideBarIvr menuItems={menus} initialOpenState={isOpen} /> */}

        <FilterPanel isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className={`bg-gray-100 ${sideBarToggle ? "w-[87vw]" : "w-[95.6vw]"}`}>
        {isLoading ? (
          <div className="flex justify-center h-[100vh] items-center font-semibold text-center"><p className="text-center">Loading...</p></div>
        ) : (
          <ReactFlowHorizontal nodesData={nodes} edgesData={edges} />
        )}
      </div>
    </div>
  );
}

export default Home;

