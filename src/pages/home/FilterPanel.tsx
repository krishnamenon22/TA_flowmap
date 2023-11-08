// Sidebar.tsx
import React, { useState } from "react";
import { Modal } from '@mui/material'
import { FaLeftLong } from "react-icons/fa6";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import _, { isEmpty } from 'lodash';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export type filter = {
  label: string;
  checked: boolean;
}

export type selectedfilter = filter[]

function FilterPanel(props: SidebarProps) {
  const { isOpen, toggleSidebar } = props;
  const [modalShow, setModalShow] = useState<boolean>(false)
  const [value, setValue] = React.useState('one');
  const [checkboxes, setCheckboxes] = useState([
    { label: 'Gender', checked: false },
    { label: 'PCT > 50%', checked: false },
    { label: 'PCT < 50%', checked: false },
    { label: 'Top % Ranks', checked: false },
    { label: 'PCT < 20 %', checked: false },
    { label: 'PCT < 30 %', checked: false },
    { label: 'PCT < 40 %', checked: false },
    { label: 'PCT < 90 %', checked: false },
  ]);
  const [selectedFilter, setSelectedFilter] = useState<selectedfilter>([])
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    const temp: React.SyntheticEvent = event;
    setValue(newValue);
  };

  const handleFilter = () => {
    setModalShow(false);
    let temp: selectedfilter = [];
    temp = _.filter(checkboxes, { checked: true });
    setSelectedFilter(temp)
    console.log("tan", temp)

  }

  const handleCheckboxChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = event.target.checked;
    setCheckboxes(newCheckboxes);
  };

  // const Checkboxfunc = () =>{
  //   return (
  //     <div>
  //       {
  //         checkboxes.map((checkbox,index) =>(
  //           <div key={index}>
  //           <Checkbox
  //             checked={checkbox.checked}
  //             onChange={handleCheckboxChange(index)}
  //           />
  //           {checkbox.label}
  //         </div>
  //         ))}

  //     </div>
  //   );
  // }


  const [filterFormData, setFilterFormData] = useState({
    startDate: '',
    endDate: '',
    dateRange: '',
    topJounery: '',
    calculationOption: 'option1'
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFilterFormData({
      ...filterFormData,
      [name]: value
    })
  }
  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFilterFormData({
      ...filterFormData,
      [name]: value
    })
  }

  const handleRadioChange = (e: any) => {

    setFilterFormData({
      ...filterFormData,
      calculationOption: e.target.value
    })
  }

  const handleApplyButtonClick = () => {
    console.log(filterFormData, "filterFormData");
  }

  const NodeSelctionData = [
    { value: "Option1" },
    { value: "Option1" },
    { value: "Option1" },
    { value: "Option1" },
    { value: "Option1" }
  ]

  return (
    <div className={`p-4 w-[270px] h-full bg-[#000] text-white fixed top-[54px] right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-out-in duration-300`}>
      <div className="flex justify-between items-center py-0 pb-4">
        <div className="text-xl" >Filter</div>

        <div className="flex items-center">
          <button type="button" onClick={toggleSidebar} className="fixed cursor right-4 ">
            <FaLeftLong fontSize={20} />
          </button>
        </div>
      </div>

      <div className="text-sm">Date Range </div>

      <div className="flex px-2 py-4">
        <div>
          <input
            className="border text-black rounded w-[100%] h-[30px] py-2 px-3 pointer"
            type="date"
            name="startDate"
            value={filterFormData.startDate}
            onChange={handleInputChange}
          />
          <input
            className="border text-black rounded w-[100%] h-[30px] py-2 px-3 my-2"
            type="date"
            name="endDate"
            value={filterFormData.endDate}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className=" text-sm">Show top</div>
        <input
          className="border rounded h-8 w-[20%] mx-4"
          type="number"
          name="topJourneys"
          value={filterFormData.topJounery}
          onChange={handleInputChange}
        />
        <div className="text-sm">Journeys</div>
      </div>

      <div className=" py-6 flex flex-col">
        {/* <div>Calculate data based on:</div> */}
        <div>
          <label>
            <input
              type="radio"
              name="calculationOption"
              value="Top Jounery"
              className="text-sm focus:outline-none"
              checked={filterFormData.calculationOption === "Top Jounery"}
              onChange={handleRadioChange}
            /> Top Jounery
          </label>
        </div>
        <div className="py-2">
          <label>
            <input
              type="radio"
              name="calculationOption"
              value="All Jounery"
              className="text-sm focus:outline-none"
              checked={filterFormData.calculationOption === "All Jounery"}
              onChange={handleRadioChange}
            /> All Jounery
          </label>
        </div>
      </div>
      <div className="mx-0 flex flex-col">
        <label htmlFor="startNode" className="text-sm">Start Node </label>

        <select
          className="rounded ring-[0px] h-[36px] pt-0 pr-34 pb-0 pl-4 text-black mt-2 w-[95%] "
          name="nodeSelection"
          id="nodeSelection"
          onChange={handleSelectChange}
        >
          {NodeSelctionData.map((data: any) => (
            <option>{data.value}</option>
          ))}

        </select>
        <label htmlFor="endNode" className="text-sm mt-2">End Node </label>
        <select
          className="rounded ring-[0px] h-[36px] pt-0 pr-34 pb-0 pl-4 text-black text-sm w-[95%] mt-2"
          name="nodeSelection"
          id="nodeSelection"
          onChange={handleSelectChange}
        >
          {NodeSelctionData.map((data: any) => (
            <option>{data.value}</option>
          ))}

        </select>
        {!isEmpty(selectedFilter) &&
          <div className="mt-2">
            <label htmlFor="endNode" className="text-sm mt-2">Selected Filters</label>
            <select
              className="rounded ring-[0px] text-black text-sm w-[95%] mt-2"
              name="nodeSelection"
              id="nodeSelection"
            >
              {selectedFilter.map((data: any) => (
                <option>{data.label}</option>
              ))}

            </select>
          </div>

        }
      </div>
      <Stack spacing={2} direction="row" className="flex justify-between pt-8 pb-4">

        <Button variant="contained" sx={{ background: '#F7901D', '&:hover': { background: '#F7901D' } }} onClick={() => handleApplyButtonClick} className="bg-[#F7901D] hover:bg-[#F7901D]" size="small">Apply</Button>
        <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }} onClick={() => setModalShow(true)} size="small">Filter Settings</Button>
      </Stack>
      {/* <div className="flex flex-col items-center py-8 " >
        <button className="w-[108px] text-center rounded py-2 bg-blue-800 mb-4" type="button" onClick={handleApplyButtonClick}>Apply</button>
        <button className="w-[108px] border-[1px] py-2 border-solid rounded mb-4" type="button" onClick={() => setModalShow(true)} >Filter Settings</button>
      </div> */}
      <Modal open={modalShow} onClose={() => setModalShow(false)} className="p-4">
        <div data-testid="outerWhiteDiv" className="bg-white absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4  w-[320px] h-30 outline-none">
          <div className="flex justify-start text-lg bg-[#1C1C1C] text-white font-semibold p-2">Filters</div>
          <Box sx={{ width: '100%', height: '100%' }} className="p-2">
            {/* <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        className="p-2"
      >
        <Tab value="one" label="All" />
        <Tab value="two" label="Active" />
      </Tabs>
      {
        value === 'one' && (
          <div>
            
      <div>
        {
          checkboxes.map((checkbox,index) =>(
            <div>
            <Checkbox
              checked={checkbox.checked}
              onChange={handleCheckboxChange(index)}
            />
            {checkbox.label}
          </div>
          ))}
        
      </div>
    
          </div>
        )
      }
      {
        value === 'two' && (
          <div>
            {
          checkboxes.map((checkbox) =>(
            <div>
          
            { checkbox.checked && checkbox.label}
          </div>
          ))}
          </div>
        )
      } */}
            <div>
              {
                checkboxes.map((checkbox, index) => (
                  <div className="text-sm">
                    <Checkbox
                      checked={checkbox.checked}
                      onChange={handleCheckboxChange(index)}
                    />
                    {checkbox.label}
                  </div>
                ))}

            </div>
            <Stack spacing={2} direction="row" className="flex justify-end pt-2 pb-4">

              <Button
                variant="contained"
                sx={{ background: '#F7901D', '&:hover': { background: '#F7901D' } }}
                onClick={() => handleFilter()}
                className="bg-[#F7901D] hover:bg-[#F7901D]"
                size="small"
              >
                Set Filter
              </Button>

              <Button variant="outlined" sx={{ color: '#1E40AF', borderColor: '#1E40AF' }} onClick={() => setModalShow(false)} size="small">Cancel</Button>
            </Stack>
          </Box>

        </div>

      </Modal>
    </div>
  )
};

export default FilterPanel;
