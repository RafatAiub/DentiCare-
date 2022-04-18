import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs' className='fs-5'>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3>Difference between authorization and authentication</h3>
                <p>So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.

                    In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3>Why should I use Firebase for authentication?</h3>
                <p>

                    Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
                </p>
            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3>What are different services that Firebase provide to use?</h3>
                <p>There are many services which Firebase provides, Most useful of them are:</p>
                <ul>
                    <li>Cloud Firestore.</li>
                    <li>Cloud Functions.</li>
                    <li>Authentication.</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                    <li>Google Analytics.</li>
                    <li>Predictions.</li>
                    <li>Cloud Messaging.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;