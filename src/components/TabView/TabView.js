import { useState } from 'react';

export const TabView = ({ title, tabs = [], newTabContent, itemsLangData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [allTabs, setAllTabs] = useState(tabs);

  const NewTabButton = (
    <div className='btn' onClick={() => createNewTab()}>
      Add new Language
    </div>
  );

  const NewTab = newTabContent;

  const createNewTab = () => {
    const newTabs = allTabs;
    newTabs.push({ name: 'New Language', content: NewTab });
    setAllTabs(newTabs);
    setActiveTabIndex(newTabs.length - 1);
  };

  const activateTab = (index) => {
    console.log(allTabs[index].content);
    setActiveTabIndex(index);
  };

  useState(() => {
    console.log('Page rerender');
  }, []);

  const activeClass =
    'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500';
  const inactiveClass =
    'rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300';

  return (
    // <div>
    //   <div className='TabView'>
    //     {title && <h4 className='title'>{title}</h4>}
    //     <div className='body'>
    //       {allTabs.length === 0 ? (
    //         <div className='tabs'>
    //           <div>No Tabs</div>
    //           {editable ? NewTabButton : null}
    //         </div>
    //       ) : (

    //       )}
    //     </div>
    //   </div>
    // </div>

    <div>
      <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
        {allTabs.map((tab, index) => (
          <li class='me-2' key={index}>
            <a
              href='#'
              className={
                'inline-block p-4 ' +
                (index === activeTabIndex ? activeClass : inactiveClass)
              }
              onClick={() => activateTab(index)}
            >
              {tab.name}
            </a>
          </li>
        ))}

        {/* <li class='me-2'>
          <a
            href='#'
            class='inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
          >
            English
          </a>
        </li> */}
        <li class='me-2'>{NewTabButton}</li>
      </ul>
      {/* <div className='content'>{allTabs[activeTabIndex].content}</div> */}

      {allTabs.map((tab, index) => (
        <div
          className={`${activeTabIndex === index ? '' : 'hidden'}`}
          key={index}
        >
          {allTabs[index].content}
        </div>
      ))}
    </div>
  );
};

// const TabView = ({ title, tabs = [], editable = false }) => {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   const [allTabs, setAllTabs] = useState(tabs);

//   const NewTabButton = (
//     <div className='btn' onClick={() => createNewTab()}>
//       +
//     </div>
//   );

//   const NewTab = (
//     <div>
//       <label>New Tab</label>
//       <p>This is a new tab.</p>
//     </div>
//   );

//   const createNewTab = () => {
//     const newTabs = allTabs;
//     newTabs.push({ name: 'New Tab', content: NewTab });
//     setAllTabs(newTabs);
//     setActiveTabIndex(newTabs.length - 1);
//   };

//   const activateTab = (index) => {
//     setActiveTabIndex(index);
//   };

//   return (
//     <div className='TabView'>
//       {title && <h4 className='title'>{title}</h4>}
//       <div className='body'>
//         {allTabs.length === 0 ? (
//           <div className='tabs'>
//             <div>No Tabs</div>
//             {editable ? NewTabButton : null}
//           </div>
//         ) : (
//           <div>
//             <div className='tabs'>
//               {allTabs.map((tab, index) => (
//                 <label
//                   key={index}
//                   className={index === activeTabIndex ? 'active-tab' : 'tab'}
//                   onClick={() => activateTab(index)}
//                 >
//                   {tab.name}
//                 </label>
//               ))}
//               {editable ? NewTabButton : null}
//             </div>
//             <div className='content'>{allTabs[activeTabIndex].content}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export default TabView;
