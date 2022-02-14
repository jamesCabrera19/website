export default function Resume() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: "20px 0",
                }}
            >
                <div
                    style={{
                        height: "65rem",
                        width: 200,
                        backgroundColor: "#141418",
                    }}
                >
                    <div
                        style={{
                            color: "#FFF",
                            textAlign: "left",
                            marginLeft: 20,
                        }}
                    >
                        <h1>Contact</h1>
                        <hr />
                        <ul style={{ listStyle: "none", marginLeft: -40 }}>
                            <li>
                                <p>jctcabrera@outlook.com</p>
                            </li>
                            <li>
                                <p>(817) 876-0271</p>
                            </li>
                            <li>
                                <h3>Social Media</h3>
                                <p>LinkedIn: /jamescabrera</p>
                                <p>Github: /playalimbo</p>
                            </li>
                        </ul>
                    </div>
                    <div
                        style={{
                            color: "#FFF",
                            textAlign: "left",
                            marginLeft: 20,
                        }}
                    >
                        <h1>Skills</h1>
                        <hr />
                        <h3>Programming</h3>
                        <p>Javascript</p>
                        <p>Typescript </p>
                        <h3>Frameworks</h3>
                        <p>Mongo DB</p>
                        <p>Express</p>
                        <p>React/React Native</p>
                        <p>NodeJS</p>
                    </div>
                    <div
                        style={{
                            color: "#FFF",
                            textAlign: "left",
                            marginLeft: 20,
                        }}
                    >
                        <h1>Education</h1>
                        <hr />
                        <h3>B.B.A in Finance</h3>
                        <p>
                            University of Houston-Downtown,
                            <span> 2017 - 2019</span>
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        height: "65rem",
                        width: 520,
                        backgroundColor: "#F5F6FA",
                    }}
                >
                    <div
                        style={{
                            textAlign: "left",
                            marginLeft: 20,
                        }}
                    >
                        <h1>Experience</h1>
                        <hr />
                        <div>
                            <h3>
                                Multi-media application <span>| project</span>
                            </h3>
                            <p>
                                Developed a multi-media web streaming service
                                using using RESTful API methods along with
                                NodeJS, Express, and Mongo DB. It allows users
                                to stream and download music and video content
                                to their device.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        Integrated user authentication using web
                                        token for encryption and decryption of
                                        data.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Created a web scraping API service that
                                        allows users to stream over 100+ songs.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>
                                Music streaming application{" "}
                                <span>| project</span>
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Developed designed a music streaming
                                        application for iOS and web devices
                                        using React, React Native and Redux.
                                    </p>
                                </li>
                                <li>
                                    Implemented class-oriented programming along
                                    with CRUD operations and Redux state
                                    management.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>
                                Video streaming application{" "}
                                <span>| project</span>
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Developed a video streaming application
                                        for iOS and web devices using React and
                                        React Native.
                                    </p>
                                </li>
                                <li>
                                    Implemented functional-oriented programming
                                    along with CRUD operations and React state
                                    management.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
