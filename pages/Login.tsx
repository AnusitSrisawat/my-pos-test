

export default function Login() {
    return (
        <div className="bg-blue-300 flex flex-col justify-center items-center gap-4 p-4 min-h-screen w-full">
            <h1>login</h1>
            <div className="border border-blue-950 flex flex-col justify-center items-center gap-4 p-4 rounded-3xl">
                <label htmlFor="username">username</label>
                <input name="username" type="text" />
                <label htmlFor="password">password</label>
                <input name="password" type="text" />

                <button className="border border-blue-950 rounded-xl p-2" type="submit">submit</button>
            </div>
        </div>
    );
}
