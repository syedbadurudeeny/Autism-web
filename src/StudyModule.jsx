import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { useMemo } from "react";

function StudyModule(){
    const [data,setData]= useState();
    const retriveItem = localStorage.getItem("checkedItem");
    const retrivedData = JSON.parse(retriveItem);
    // setData(retriveItem)


    useEffect(()=>{
    setData(retrivedData);
    },[])
    console.log(data)

    let initialCheck = {checkbox1:{checked : false},checkbox2:{checked : false}};
    // let disableChecked = {checkbox1:{disable : false},checkbox2:{disable : false}};

    const [check,setCheck] = useState(initialCheck);
    // const [disable,setDisable]= useState(disableChecked)

    function hanldeCheck(e){
        const {name,checked} = e.target;
        let newCheck = {...check,[name]:{checked}};
        setCheck(newCheck);

        localStorage.setItem("checkedItem",JSON.stringify(newCheck));

        // let newDisable = disable;

        // if(newCheck.checkbox1.checked){
        //     newDisable.checkbox1.disable = true;
        // }
        // if(newCheck.checkbox2.checked){
        //     newDisable.checkbox2.disable = true;
        // }

        // setDisable({...newDisable});

    }
   

    function dailyHygieneNote(){

        let date = new Date();
        let note = date.toLocaleTimeString().slice(8,11);
        let noteTime = date.toLocaleTimeString().slice(0,1).length;
        // console.log(note)
        
        if(noteTime == 1){
            noteTime = date.toLocaleTimeString().slice(0,1);
        }else{
            noteTime = date.toLocaleTimeString().slice(0,2);
        }

        // console.log(noteTime)
        if(note == "PM" && noteTime == "11"){
            let updateCheck = check;
            
            if(updateCheck.checkbox1.checked){
                updateCheck.checkbox1.checked = false;
            }
            if(updateCheck.checkbox2.checked){
                updateCheck.checkbox1.checked = false;
            }
    
            
            localStorage.setItem("checkedItem",JSON.stringify(updateCheck));
            // console.log(newCheck)
            // console.log(disable)
        }
    }
    dailyHygieneNote()
    
    useEffect(() => {
        const stories = document.querySelectorAll(".story");

        stories.forEach((story) => {
            story.addEventListener("click", (e) => {
                if (story.nextElementSibling.classList.contains("hidden")) {
                    console.log(story.nextElementSibling.clientHeight)
                    story.nextElementSibling.classList.remove("hidden");
                    story.nextElementSibling.classList.add("active");
                } else {
                    story.nextElementSibling.classList.remove("active");
                    story.nextElementSibling.classList.add("hidden");
                }
            });
        });

        return () => {
            stories.forEach((story) => {
                story.removeEventListener("click", (e) => {});
            });
        };
    }, []);

    return(
        <>
       <header>
       <h2>Study Module Page</h2>
       <br/>
       <nav>
            <ul>
                <li><Link to={"/register"} >Register</Link></li>
                <li><Link to={"/login"} >Login</Link></li>
                <li><Link to={"/"} >Dashboard</Link></li>
                <li><Link to={"/awareness"} >Awareness</Link></li>
                <li><Link to={"/survey"} >Survey</Link></li>
                <li><Link to={"/study/module"} >StudyModule</Link></li>
                <li><Link to={"/communication/low/module"} >CommunicationLowModule</Link></li>
                <li><Link to={"/communication/high/module"} >CommunicationHighModule</Link></li>
                <li><Link to={"/test/module"} >TestModule</Link></li>
            </ul>
        </nav>
       </header>
       <br/>
        <main>
            {/* low level autism study module */}
           <section className="low-level-autism-study-module">
           <article>
                <h3>Moral Stories</h3>
                <section>
                    <div>
                        <h3 className="story" >Story 1</h3>
                        <p className="para hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum at magni voluptatem voluptas labore mollitia itaque nobis laboriosam? Maxime ad est officia voluptates culpa odio reiciendis corporis quod laborum repellendus!</p>
                    </div>
                    <div>
                        <h3 className="story" >Story 2</h3>
                        <p className="para hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum at magni voluptatem voluptas labore mollitia itaque nobis laboriosam? Maxime ad est officia voluptates culpa odio reiciendis corporis quod laborum repellendus!</p>
                    </div>
                    <div>
                        <h3 className="story" >Story 3</h3>
                        <p className="para hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum at magni voluptatem voluptas labore mollitia itaque nobis laboriosam? Maxime ad est officia voluptates culpa odio reiciendis corporis quod laborum repellendus!</p>
                    </div>
                    <div>
                        <h3 className="story" >Story 4</h3>
                        <p className="para hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum at magni voluptatem voluptas labore mollitia itaque nobis laboriosam? Maxime ad est officia voluptates culpa odio reiciendis corporis quod laborum repellendus!</p>
                    </div>
                    <div>
                        <h3 className="story" >Story 5</h3>
                        <p className="para hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum at magni voluptatem voluptas labore mollitia itaque nobis laboriosam? Maxime ad est officia voluptates culpa odio reiciendis corporis quod laborum repellendus!</p>
                    </div>
                </section>
            </article>
            <br/>
            <article>
                <h3>Academic Lesson On Maths</h3>
                <div>
                    <h3>To Low Level Autism Students</h3>
                    <p>It consists of 3 videos that mentioned below...</p>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=DhdWV5bJ3lY&list=PLRleA8QD1EPzK3n7kPpNJSlT4X8N-s_Jk" target="_blank" id="image">Lesson 1</a> <FaYoutube/>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=LBaYB2h5d5c&list=PLRleA8QD1EPzK3n7kPpNJSlT4X8N-s_Jk&index=3" target="_blank" id="image">Lesson 2</a> <FaYoutube/>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=au3BvPLymHM&list=PLRleA8QD1EPzK3n7kPpNJSlT4X8N-s_Jk&index=2" target="_blank" id="image">Lesson 3</a> <FaYoutube/>
                </div>
            </article>
            <br/>
            <article>
                <h3>Academic Lesson On Science</h3>
                <div>
                    <h3>To Low Level Autism Students</h3>
                    <p>It consists of 3 videos that mentioned below...</p>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=b5NK4CXI4GQ" target="_blank" id="image">Lesson 1</a> <FaYoutube/>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=lv6dC0coQeI" target="_blank" id="image">Lesson 2</a> <FaYoutube/>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=BnQnXN0y8P0" target="_blank" id="image">Lesson 3</a> <FaYoutube/>
                </div>
            </article>
            <br/>
            <article>
                <h3>Academic Lesson On English</h3>
                <div>
                    <h3>To Low Level Autism Students</h3>
                    <p>It consists of 2 videos that mentioned below...</p>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=BeWWyjZqRyE" target="_blank" id="image">Lesson 1</a> <FaYoutube/>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=RiYzD1h-YVQ" target="_blank" id="image">Lesson 2</a> <FaYoutube/>
                </div>
            </article>
           </section>

           <br/>
             {/* high level autism study module */}

             <section>
                <article>
                    <h3>Day To day Major Routines</h3>
                    <div>
                        <input type="checkbox" id="checkbox1" className="checkbox1" disabled={data?.checkbox1.checked} name="checkbox1" onChange={hanldeCheck} />&nbsp;
                        <label htmlFor="checkbox1">Brushing teeth</label>
                        <br/>
                        <input type="checkbox" id="checkbox2" className="checkbox2" disabled={data?.checkbox1.checked} name="checkbox2" onChange={hanldeCheck}  />&nbsp;
                        <label htmlFor="checkbox2">Praying</label>
                    </div>
                    <br/>
                    <div>
                        <h3>How to crossing traffic light ?</h3>
                        <p>
                            <ul>
                                <li><strong>Look both ways:</strong> Make eye contact with drivers before crossing. 
                                </li>
                                <li><strong>Use push buttons:</strong> If available, use push buttons to activate the lock signal. 
                                </li>
                                <li><strong>Cross on red:</strong> When the light is red, all vehicles must stop at the stop line or pedestrian crosswalk to allow pedestrians to cross. 
                                </li>
                                <li><strong>Cross on green:</strong> When the light is green, vehicles can move forward, but pedestrians should not cross</li>
                                <li><strong>Yield to pedestrians:</strong> Slow down and yield to pedestrians on zebra crossings. 
                                </li>
                                <li><strong>Wait for drivers:</strong> Drivers and cyclists should remain stopped until pedestrians have completely crossed the crosswalk. </li>
                            </ul>
                        </p>
                    </div>
                </article>
             </section>

             <br/>

             <section>
             <h3> Picture based learning (Where children are taught by showing pictures)</h3>
                <div>
                    <h3>To High Level Autism Students</h3>
                    <p>It consists of 2 videos that mentioned below...</p>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=4YDA7peyYJ8" target="_blank" id="image">Lesson 1</a> <FaYoutube/>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=5NGm88IRcL8" target="_blank" id="image">Lesson 2</a> <FaYoutube/>
                </div>
             </section>

             <br/>

             <section>
             <h3> Rhymes for children </h3>
                <div>
                    <h3>To High Level Autism Students</h3>
                    <p>It consists of 1 video that mentioned below...</p>
                </div>
                <br/>
                <div>
                <a href="https://www.youtube.com/watch?v=EVIJd4MGlG4" target="_blank" id="image">Lesson</a> <FaYoutube/>
                </div>
             </section>

        </main>
        </>
    )
}

export default StudyModule;