import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


function CommunicationLowModule(){

    const [video,setVideo] = useState();
    const [isVisible,setIsvisible] = useState(false);

    const videosData=[
        {
            video1 : "topBLaz4zgk"
        },
        {
            video2 : "-KP-5fnir48"
        },
        {
            video3 : "topBLaz4zgk"
        },
        {
            video4 : "topBLaz4zgk"
        },
        {
            video5 : "topBLaz4zgk"
        },
        {
            video6 : "topBLaz4zgk"
        },
    ];

    function handleClick(val){
        if(val === 1){
            setIsvisible(true)
            setVideo(videosData[0]?.video1)
        }
        if(val === 2){
            setIsvisible(true)
            setVideo(videosData[1]?.video2)
        }
        if(val === 3){
            setIsvisible(true)
            setVideo(videosData[2]?.video3)
        }
        if(val === 4){
            setIsvisible(true)
            setVideo(videosData[3]?.video4)
        }
        if(val === 5){
            setIsvisible(true)
            setVideo(videosData[4]?.video5)
        }if(val === 6){
            setIsvisible(true)
            setVideo(videosData[5]?.video6)
        }
    }

    function handleClose(){
        setIsvisible(false)
    }


    useEffect(()=>{
        handleClick();
    },[handleClick])

    return(
        <>
    <header>
       <h2>Communication Module Page</h2>
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
                <li><Link to={"/test/module"} >TestModule</Link></li>
            </ul>
        </nav>
    </header>
       <br/>
      {!isVisible ?
      <main>
        <section>
            <h3>Basic conversation lessons, how to interact with people how to start talking. Basically how to build a conversation using sentences</h3>
            <div>
                <img src="/algebra.jpg" alt="loading..." width={200} height={200} />
                <button onClick={()=>handleClick(1)}>Watch Now</button>
            </div>
        </section>
        <br/>
        <section>
            <h3>Here then children would be thought about feelings, sentiment and emotions that every human undergo.</h3>
            <div>
                <img src="/algebra.jpg" alt="loading..." width={200} height={200} />
                <button onClick={()=>handleClick(2)}>Watch Now</button>
            </div>
        </section>
        <br/>
        <section>
            <h3>various role-playing situations and scenarios</h3>
            <div>
                <img src="/algebra.jpg" alt="loading..." width={200} height={200} />
                <button onClick={()=>handleClick(3)}>Watch Now</button>
            </div>
        </section>
        <br/>
        <section>
            <h3>scenarios of fighting and how to deal with it.</h3>
            <div>
                <img src="/algebra.jpg" alt="loading..." width={200} height={200} />
                <button onClick={()=>handleClick(4)}>Watch Now</button>
            </div>
        </section>
        <br/>
        <section>
            <h3>scenarios with multiple choice decisions.</h3>
            <div>
                <img src="/algebra.jpg" alt="loading..." width={200} height={200} />
                <button onClick={()=>handleClick(5)}>Watch Now</button>
            </div>
        </section>
        <br/>
        <section>
            <h3>training to accept failures through stories.</h3>
            <div>
                <img src="/algebra.jpg" alt="loading..." width={200} height={200} />
                <button onClick={()=>handleClick(6)}>Watch Now</button>
            </div>
        </section>
       </main> : 
       <div className="iframe">
        <div className="close-icon">
        <IoMdClose style={{ fontSize: '36px' }} onClick={handleClose} />
        </div>
       <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
       </div>
}
        </>
    )
}

export default CommunicationLowModule;