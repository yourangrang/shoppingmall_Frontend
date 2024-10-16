import React from 'react'

const RegisterPage = () => {
    return (
        <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
            <div className="p-6 bg-white rounded-md shoadow-md">
                <h1 className="text-3xl font-semibold text-center">
                    회원가입
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="text-sm font-semibold text-gray-800"
                        >
                            이름
                        </label>
                        <input 
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-semibold text-gray-800"
                        >
                           비밀번호
                        </label>
                        <input 
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white duration-200 transform bg-black rounded-md hover:bg-gray-500"
                        >
                            회원가입
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}아이디가 있다면?{" "}
                    <a 
                    href="/login"
                    className="font-bold hover:underline">
                        로그인
                    </a>
                </p>
            </div>
        </section>
    )
}

export default RegisterPage
