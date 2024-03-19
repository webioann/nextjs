import React, { ReactNode } from 'react'
import Image from 'next/image'
import styles from './entry_point.module.scss'
import AuthPageFooter from '../../components/AuthPageFooter/AuthPageFooter'

function EntryPointLayout({ children }: {children: ReactNode}) {
    
    return (
        <main className={styles.container}>
            <Image 
                src={require('../../public/login_background.jpg')}
                className={styles.bg_image} 
                alt='page bg'
                priority 
                fill
            />
            {children}
            <AuthPageFooter/>
        </main>
    )
}

export default EntryPointLayout;