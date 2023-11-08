import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Popover from '@mui/material/Popover';
import { logoutUser } from "../../store/slice/authSlice"
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useAppSelector } from "../../store";

type HeaderProp = {
  title: string;
}

function header({ title }: HeaderProp) {

  const [open, setOpen] = useState<boolean>(false);
  const { sideBarToggle } = useAppSelector((d) => d.sidebarSlice);
  const [notificationSlider, setNotificationSlider] = useState<boolean>(false)
  const [isUserProfile, setIsUserProfile] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const logoutroute = () => {
    alert("clicked")
    // dispatch(logoutUser())
    // dispatch(setUser(false));
  }
  useEffect(() => {
    console.log("hii")
  }, [])

  return (
    <div
      className="bg-white px-4 py-3 flex items-center w-full"
    // className={`bg-[#80808073] ${sideBarToggle ? 'px-[262px]' : 'px-16'}px-4 py-3 flex items-center w-full`}
    >
      {/* <div className="text-xl tracking-[0px] leading-[30px] text-[#1C1C1C] font-semibold">IVR Plotform</div> */}
      <div className="flex items-center w-[50%]">
        <div className="text-xl tracking-[0px] leading-[30px] text-[#1C1C1C] font-semibold">{title}</div>
      </div>
      <div className="flex items-center w-[50%] justify-end px-3 pr-5">
        <div className="float-right flex gap-4">
          <div className="cursor-pointer relative flex">
            <div>
              <NotificationsIcon sx={{ color: "#003668" }} onClick={() => setNotificationSlider(true)} data-testid="notificationIcon" />
            </div>
            {/* {
              isNotify && (
                <span className='text-white bg-red-500 text-[8px] rounded-full 
                     min-w-[15px] min-h-[15px] flex items-center justify-center
                    absolute right-[-2px] top-[-4px]'>
                  {notificationCount}
                </span>
              )
            } */}
            {
              notificationSlider && (
                <div>Notifcation Count </div>
              )
            }
          </div>
          <div className="cursor-pointer">
            <AccountCircleIcon sx={{ color: "#003668" }} onClick={handleClick} data-testid="userIcon" />
            {
              isUserProfile &&

              <div
                // onClick={logoutroute} 
                className="flex p-4 text-[#F01F1F] cursor-pointer justify-center align-center items-center"><LogoutIcon fontSize='small' sx={{ marginRight: 1 }} /><span>Logout</span></div>
              // </Popover>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default header