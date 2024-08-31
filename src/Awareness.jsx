import { Link } from "react-router-dom";

function Awareness(){

    return(
        <>
        <header>
       <h2>Awareness Page</h2>
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
        <main className="awareness-module">
            <div className="awareness-content">
                <h2>Understanding Autism: A Guide for Parents</h2>
                <br/>

                <section>
                <h3> What is Autism?</h3>
                <p>Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interactions. Each child with autism is unique, and the spectrum can range from mild to severe. Understanding the individuality of your child's needs is the first step in supporting them.</p>
                </section>
                <br/>

                <section>
                <h3>Recognizing the Signs</h3>
                <p>Early identification of autism can make a significant difference. Some common signs include:
                    <ul>
                        <li>Delayed speech or language skills</li>
                        <li>Difficulty making eye contact</li>
                        <li>Repetitive behaviors or intense focus on specific interests</li>
                        <li>Sensitivity to sensory inputs like sound, light, or textures</li>
                        <li>Challenges in social interactions</li>
                    </ul>
                </p>
                </section>
                <br/>

                <section>
                <h3>Seeking a Diagnosis</h3>
                <p>If you notice signs of autism in your child, consult with a pediatrician or a specialist. A formal diagnosis can open the door to various resources and interventions that can help your child thrive.
                </p>
                </section>
                <br/>

                <section>
                <h3>Supporting Your Child</h3>
                <p>
                    <ul>
                        <li><strong>Create a Structured Environment:</strong> Children with autism often thrive in environments with clear routines and predictability.</li>
                        <li><strong>Use Visual Supports:</strong> Visual schedules, social stories, and picture cards can help your child understand and navigate daily activities.</li>
                        <li><strong>Encourage Communication: </strong>Whether through speech, sign language, or alternative communication devices, find the best way for your child to express themselves.</li>
                        <li><strong>Promote Social Interaction: </strong>Encourage playdates, group activities, and social skills training to help your child build relationships.</li>
                    </ul>
                </p>
                </section>
                <br/>

                <section>
                <h3>Educating Yourself and Others</h3>
                <p>Learn as much as you can about autism. Attend workshops, read books, and connect with other parents who are on the same journey. Educating family members, friends, and educators about autism can also create a more supportive environment for your child.
                </p>
                </section>
                <br/>

                <section>
                <h3>Focusing on Strengths</h3>
                <p>Every child has unique strengths and talents. Whether it's in art, music, math, or another area, nurturing your child’s abilities can boost their confidence and self-esteem.
                </p>
                </section>
                <br/>

                <section>
                <h3>Self-Care for Parents</h3>
                <p>Caring for a child with autism can be demanding, so it's essential to take care of yourself too. Join support groups, seek counseling if needed, and don’t hesitate to ask for help. A well-rested and supported parent is better equipped to support their child.
                </p>
                </section>
                <br/>

                <section>
                <h3>Accessing Resources</h3>
                <p>Look into early intervention programs, special education services, and therapy options like speech therapy, occupational therapy, and behavioral therapy. These resources can be vital in helping your child develop essential skills.
                </p>
                </section>
                <br/>

                <section>
                <h3>Advocating for Your Child</h3>
                <p>Be your child's voice in school, healthcare settings, and the community. Ensure they receive the accommodations and support they need to succeed.
                </p>
                </section>
                <br/>

                <section>
                <h3> Celebrate Progress</h3>
                <p>Every small step forward is a victory. Celebrate your child's achievements, no matter how small they may seem. Your encouragement and love are powerful tools in their growth.
                </p>
                </section>
                <br/>
            </div>
        </main>
        </>
    )
}

export default Awareness;