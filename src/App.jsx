import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import './index.css'; // Assuming you have a CSS file for custom styles
import SearchHeader from "./components/SearchHeader";
import AddItemHeader from "./components/AddItemHeader"
const App = () => {
  return (
    <>
      <Toaster />
      <div className="flex flex-col gap-20">
        <Tabs className="gap-2 custom-tabs"> {/* Added custom class for styling */}
          <Tab key="1" title="  " className="custom-tab">
            <div className="flex flex-col gap-2">
                <SearchHeader/>
          
            </div>
          </Tab>
          <Tab key="2" title="  " className="custom-tab">
            <div className="flex flex-col gap-2">
            <SearchHeader/>
            </div>
          </Tab>
          <Tab key="3" title="  " className="custom-tab">
            <div className="flex flex-col gap-2">
            <AddItemHeader/>
            </div>
          </Tab>
          <Tab key="4" title="  " className="custom-tab">
            <div className="flex flex-col gap-2">
            <AddItemHeader/>
            </div>
          </Tab>
          <Tab key="5" title="  " className="custom-tab">
            <div className="flex flex-col gap-2">
            <AddItemHeader/>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default App;
