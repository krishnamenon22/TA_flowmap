import React from "react"
import { useNavigate } from "react-router-dom";


function LoginCard() {

  const navigate = useNavigate()

  const routechange = () => {
    const path = "/home"
    navigate(path)
  }



  return (
    <div data-testid="outerDiv" className="w-[100%] h-[100vh] bg-gray-100 flex flex-col">
      <div data-testid="loginCardDiv" className="h-[92%] w-[99%] flex justify-center items-center align-center">    <div data-testid="outerWhiteDiv" className="flex  py-5 px-20 flex-col justify-between rounded-[20px] min-h-[300px] min-w-[400px] bg-white">
        <div data-testid="ScaiLogoDiv" className="flex mt-10 justify-center text-lg">
          FLowMap
          {/* <img className="h-[40px] w-[94.52px]" src={SCAI} alt="ScaiLogo" /> */}
        </div>
        <div data-testid="LoginButtonDiv" className=" justify-center align-end content-center">
          <button type="button"
            className="w-full bg-[#F7901D] text-sm text-white font-semibold py-2 flex justify-center content-center rounded"
            onClick={() => routechange()}
          >
            Login
          </button>
        </div>
        <div className="flex justify-center text-[12px] text-[#9B9898]">Powered by Tiger Analytics </div>
      </div>
      </div>
    </div>
  )
}

export default LoginCard;