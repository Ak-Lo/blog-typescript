import {useState} from "react";
// @ts-ignore
import { Tab, Tabs, TabList, TabPanel } from 'react-bootstrap-tabs';
import './blog-tabs.css'
import { blogTabs } from "../../assets/json-data";
// import CategorySearchBox from "./blog-category-search";
// import axios from "axios";
// import { API_BASE_URL } from "../../../constants/apiConstants";


// const blogTabs = [
//     "ყველა კატეგორია",
//     "გადაუდებელი სამუშაოები",
//     "სანტექნიკოსი",
//     "არქიტექტურა და დიზაინი",
//     "უსაფრთხოების სისტემები"
// ]

type BlogTabsT = {
    selectedTab: string[]
    setSelectedTab: (selectedTab: string[]) => void
}

function BlogTabs( {setSelectedTab, selectedTab}:BlogTabsT ) {

    const [showCatModal, setShowCatModal] = useState(false);

    console.log("SELECTED TAB", selectedTab)
    // const [blogCategoryTabs, setBlogCategoryTabs] = useState([]);

    //  useEffect(() => {
    //     async function getAllBlogTabs(){
    //         const response = await axios.get(API_BASE_URL + `api/blog/ka/categories`);
    //         const data = response.data;
    //         setBlogCategoryTabs(data);
    //     }        
    //     getAllBlogTabs()
    // }, [])

    // function selectTabsMobile(e) {
    //     let tempArray = [...selectedTab];

    //     if (e.target.checked){
    //         tempArray = [...selectedTab, e.target.value];
    //     }else if (!e.target.checked){
    //         tempArray.splice(selectedTab.indexOf(e.target.value), 1);
    //     }
    //     setSelectedTab(tempArray);
    // }

    // function checkedTabs(value){
    //     return (selectedTab.includes(value));
    // }

    return (
        <>   
            <div className="blog__tabs__mobile d-flex justify-content-center">     
                {/* <CategorySearchBox/>   */}
                <div className="filter__box d-flex justify-content-center align-items-center" onClick={() => {setShowCatModal(true)}}><i className="bi bi-filter-right text-primary"></i></div>
                {showCatModal ?
                    <div className="modal fade" id="jobcatmodal" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable cat-modal-dialog">
                            <div className="modal-content">
                                <div className="cat-modal-header">
                                    <h5 className="modal-title" id="jobcatmodalLabel">აირჩიე კატეგორია</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {setShowCatModal(false)}}>
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* <div className="row">
                                        <div className="col-12">
                                            <img className="ic-search" alt="search categories" src="./resources/icons/search-icon.png" width="16px" height="16px" />
                                            <div className="input-group mb-2">
                                                <input type="text" className="form-control search-form" id="cat-search" placeholder="საძიებო სიტყვა..." />
                                            </div>
                                        </div>
                                    </div> */}
                                    {
                                    blogTabs ? blogTabs.map((value, index) => (
                                        <div key={index} className="row cat-container">
                                            <div className="cat-checkbox" >
                                                <label htmlFor={'input' + value} id={'label' + value}>
                                                    {/* <input value={value} type="checkbox" id={'input' + value} defaultChecked={checkedTabs(value)} onChange={(e) => {selectTabsMobile(e)}} /> */}
                                                    <span className="cr">{value}<i className="bi bi-check" id="checkId" /></span>
                                                </label>
                                            </div>
                                        </div>)) : ''
                                    }
                                </div>
                                <div className="cat-modal-footer">
                                    <button type="button" className="btn btn-primary btn-block cat-submit" data-dismiss="modal" onClick={() => setShowCatModal(false)}>მოძებნა</button>
                                </div>
                            </div>
                        </div>
                    </div> : ''
                }   
            </div>           

            <div className='blog__tabs'>  
                {blogTabs.length > 0 ? <Tabs onSelect={(label:number) => setSelectedTab([blogTabs[label]])}>
                        {blogTabs.length > 0 ? blogTabs.map((blogtab, index) => {
                            return (
                            <Tab key={index} label={blogtab}></Tab>
                        )}) : ""}
                    </Tabs> : "" 
                } 
            </div>                      
        </>
    )
}

export default BlogTabs