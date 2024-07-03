import Link from 'next/link'
import React from 'react'
import SignOutButton from '../components/RegisterForm/AuthComponents/SignOutButton'

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <Link href='/signup'>Create new account</Link>
            <Link href='/login'>Login in your account</Link>
            <SignOutButton/>
        </div>
    )
}

export default HomePage