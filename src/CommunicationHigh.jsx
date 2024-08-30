import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function CommunicationHighModule(){

    const datas = [
        {
            video1 : "BeWWyjZqRyE"
        },
        {
            video2 : "RiYzD1h-YVQ"
        }
    ]

    const [video,setVideo] = useState();
    const [isvisible,setIsvisible] = useState(false);

    function handleWatch(number){
        if(number === 1){
            setVideo(datas[0]?.video1)
            setIsvisible(true);
        }
        if(number === 2){
            setVideo(datas[1]?.video2)
            setIsvisible(true);
        }
    }

    function handleClose(){
        setIsvisible(false)
    }

    const [transcript,setTranscript] = useState('');
    const [isListening,setIsListening] = useState(false);
    const [recognition,setRecognition]= useState(null);


    useEffect(()=>{

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if(SpeechRecognition){
            const recognitionInstance = new SpeechRecognition();
            console.log(recognitionInstance)
            recognitionInstance.lang = "en-US";
            recognitionInstance.interimResults = true;
            recognitionInstance.maxAlternatives = 1;


            recognitionInstance.onresult = (e)=>{
                const current = e.resultIndex;
                const transcript = e.results[current][0].transcript;
                setTranscript(transcript);
            }

            recognitionInstance.onend = () => {
                setIsListening(false);
              };
        
              setRecognition(recognitionInstance);
        }
        else {
            console.error('Speech Recognition not supported');
          }
        
    },[])


    const startListening = () => {
        if (recognition) {
          recognition.start();
          setIsListening(true);
        }
      };
    
      const stopListening = () => {
        if (recognition) {
          recognition.stop();
          setIsListening(false);
        }
      };

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
                <li><Link to={"/communication/high/module"} >CommunicationHighModule</Link></li>
            </ul>
        </nav>
       </header>
       <br/>
       {!isvisible ? 
       <main>
       <article>
                <h3>Learn English</h3>
                <div>
                    <h3>To High Level Autism Students</h3>
                    <p>It consists of 2 videos that mentioned below...</p>
                </div>
                <br/>
                <div>
                    <img src="/algebra.jpg" alt="loading..." width={200} height={200} />
                    <button onClick={()=>handleWatch(1)}>Watch Now</button>
                </div>
                <br/>
                <div>
                    <img src="/algebra.jpg" alt="loading..." width={200} height={200} />
                    <button onClick={()=>handleWatch(2)}>Watch Now</button>
                </div>
        </article>
        <br/>
        <article>
                <h3>text To Speech</h3>
                <div>
                    <h3>To High Level Autism Students</h3>
                </div>
                <br/>
                <div>
                  <button onClick={isListening ? stopListening : startListening}>{isListening ? 'Stop Listening' : 'Start Listening'}</button>
                  <p>{transcript}</p>
                </div>
        </article>
       </main> : 
       <div className="iframe">
        <div className="close-icon">
        <IoMdClose style={{ fontSize: '36px' }} onClick={handleClose} />
        </div>
       <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="true"></iframe>
       </div>}
        </>
    )
}


export default CommunicationHighModule;