import Progressbar from "../chart/Progressbar";


function SettingsSidebar() {
  return (
    <aside className="col-span-3 border-r border-bgray-200 dark:border-darkblack-400">
      {/* Sidebar Tabs */}

      <div className="px-4 py-6">
   
      </div>
      {/* Progressbar  */}
      <div className="px-8">
        <Progressbar className="bg-bgray-200 dark:bg-darkblack-500 p-7 rounded-xl" />
      </div>
    </aside>
  );
}

export default SettingsSidebar;
