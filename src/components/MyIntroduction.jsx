import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyIntroduction = ({ open, onClose }) => {
    if (!open) {
        return <></>
    }
    return <>
        <div className="w-3/5 h-3/4 absolute left-0 right-0 top-0 bottom-0 m-auto flex flex-col shadow-2xl">
            <div className="w-full rounded-t-lg shadow-2xl p-2 bg-slate-50 dark:bg-[#3b3b3b]">
                <div className="flex  justify-start pt-2 pl-2">
                    <Link className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" onClick={onClose} />
                    <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                    <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" />
                </div>
            </div>
            <div className="w-full h-full bg-neutral-200 dark:bg-[#242424] rounded-r-lg p-2 overflow-y-scroll text-justify">
                <span className="text-black dark:text-white h-full text-justify p-2">
                    <span className="text-rose-600 capitalize">*for short summary you can open summay.md file </span>
                    <br />
                    As a final year student at Shri Ramswaroop Memorial College of Engineering and Management, I am deeply passionate about technology and its transformative power. I am constantly captivated by the rapid pace at which it revolutionizes the world around us. My academic journey has equipped me with a diverse skill set, and I am driven by an insatiable curiosity to learn and grow in the ever-evolving field of Information Technology.

                    Proficient in Data Structures and Algorithms, particularly in C++, I have honed my problem-solving abilities and analytical thinking. I have also delved into the realm of Web Development, mastering technologies such as React.js, Node.js, and MySQL. This has allowed me to create dynamic and interactive web applications, leveraging both front-end and back-end technologies to deliver seamless user experiences.

                    Moreover, my familiarity with Linux OS has provided me with a strong foundation in operating system concepts and administration. I am adept at navigating through various Linux distributions, configuring system settings, and executing tasks efficiently within a command-line environment.

                    While I have acquired valuable skills through my academic journey and hands-on projects, I am aware that the technology landscape is ever-changing. Hence, I approach every opportunity with a growth mindset, eager to expand my knowledge and expertise. I thrive in dynamic environments where I can collaborate with diverse teams, exchange ideas, and tackle complex challenges head-on.

                    In summary, my blend of technical proficiency, adaptability, and passion for learning makes me a valuable asset poised to contribute effectively to the fast-paced and innovative world of Information Technology.

                    As a final year student at Shri Ramswaroop Memorial College of Engineering and Management, I am deeply passionate about technology and its transformative power. I am constantly captivated by the rapid pace at which it revolutionizes the world around us. My academic journey has equipped me with a diverse skill set, and I am driven by an insatiable curiosity to learn and grow in the ever-evolving field of Information Technology.

                    Proficient in Data Structures and Algorithms, particularly in C++, I have honed my problem-solving abilities and analytical thinking. I have also delved into the realm of Web Development, mastering technologies such as React.js, Node.js, and MySQL. This has allowed me to create dynamic and interactive web applications, leveraging both front-end and back-end technologies to deliver seamless user experiences.

                    Moreover, my familiarity with Linux OS has provided me with a strong foundation in operating system concepts and administration. I am adept at navigating through various Linux distributions, configuring system settings, and executing tasks efficiently within a command-line environment.

                    While I have acquired valuable skills through my academic journey and hands-on projects, I am aware that the technology landscape is ever-changing. Hence, I approach every opportunity with a growth mindset, eager to expand my knowledge and expertise. I thrive in dynamic environments where I can collaborate with diverse teams, exchange ideas, and tackle complex challenges head-on.

                    In summary, my blend of technical proficiency, adaptability, and passion for learning makes me a valuable asset poised to contribute effectively to the fast-paced and innovative world of Information Technology.</span>
            </div>
        </div>
    </>
}
export default MyIntroduction;