import React from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
    return (
        <div>
            <section className="bg-white py-20 lg:py-[120px]">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="flex flex-wrap justify-center items-center">
                                <Link
                                    to="/"
                                    className=" w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4 "               >
                                    <img
                                        src="https://th.bing.com/th/id/R.b394d304a7ef6b37277389ad937f769b?rik=E4myRf47gFtHoA&riu=http%3a%2f%2fcomicsbeat.com%2fwp-content%2fuploads%2f2014%2f04%2fmarvel-logo.png&ehk=5VgPnKnA6xwS3wlppO2le4vmc5nNszMjkOz7BoHW3EY%3d&risl=&pid=ImgRaw&r=0"
                                        alt=""
                                        className="w-full"/>
                                </Link>
                                <Link
                                    to="/"
                                    className=" w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4 "               >
                                    <img
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dd5vtke-4242c01a-acb6-49d6-8952-5f78313b7da0.png/v1/fill/w_1280,h_603,strp/avengers__2019_logo__by_alanmac95_dd5vtke-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvNjI3ZmU3MjEtODQ2Zi00Zjc1LWFjNjEtMTExY2EwMGIyN2RkXC9kZDV2dGtlLTQyNDJjMDFhLWFjYjYtNDlkNi04OTUyLTVmNzgzMTNiN2RhMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D_rCPgMAzwI7axRhtrx9tzc24PXQR0lRzU637xqkkoA"
                                        alt=""
                                        className="w-full"
                                    />
                                </Link>
                                <Link
                                    to="/"
                                    className=" w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4 "
                                >
                                    <img
                                        src="https://wallpapercave.com/wp/wp2986030.jpg"
                                        alt=""
                                        className="w-full"
                                    />
                                </Link>
                                <Link
                                    to="/"
                                    className=" w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4 "
                                >
                                    <img
                                        src="https://th.bing.com/th/id/R.3c79468ca504c4d644d56503d6a50bf6?rik=wUAS8vsMNEZ%2b7Q&riu=http%3a%2f%2fwww.designbolts.com%2fwp-content%2fuploads%2f2014%2f07%2fguardians-of-the-galaxy-movie-png-logo.png&ehk=E8lZGguFYUUvL3UTDdoV9jRWCRXkHO7xunti3KqRkqI%3d&risl=&pid=ImgRaw&r=0"
                                        alt=""
                                        className="w-full"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brands;