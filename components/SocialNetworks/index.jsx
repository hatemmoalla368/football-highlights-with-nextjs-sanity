import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import ScreenEgg from '../ScreenEgg';



const socialnetworks = [
    {
        id:1,
        href: 'https://github.com/hatemmoalla368',
        icon: AiFillGithub
    },
    {
        id:2,
        href: 'https://www.linkedin.com/in/hatem-moalla-b99a78199/',
        icon : AiFillLinkedin
    }
]

const SocialNetworks = ({
   
    className
}) => {
  return (
    <ScreenEgg type="left">
      <ul className={cl(className, styles.list)}>
        {socialnetworks.map((social)=>(
            <li
            key={social.id}
            className={styles.listItem}
            >
                <a
                href={social.href}
                target='_blank'
                className={styles.listLink}
                rel='noreferrer'
                >
                    {React.createElement(
                        social.icon,
                        {
                            color:'black',
                            size: 50
                        }
                    )}


</a>
            </li>
        ))}
        </ul>
        </ScreenEgg>
  )
}

export default SocialNetworks
