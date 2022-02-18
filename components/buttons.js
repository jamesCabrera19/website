import _styles from "../styles/buttons.module.css";
import Link from "next/link";

export default function ButtonContainer({ borderColor }) {
    const styles = {
        sectionFour: {},
        btn: {
            height: 50,
            borderRadius: 0,
            border: `1px solid ${borderColor}`,
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            padding: 15,
            marginRight: 30,
            // backgroundColor: colorScheme.buttonColor, // replace by css hover effect
            // color: colorScheme.buttonFontColor, // replace by css hover effect
            cursor: "pointer",
        },
    };
    const buttonLinks = [
        {
            link: "/contact",
            title: "Contact",
        },
        {
            link: "/portfolio",
            title: "Portfolio",
        },
        {
            link: "/resume",
            title: "Resume",
        },
        {
            link: "https://www.linkedin.com/",
            title: "LinkedIn",
        },
        {
            link: "https://github.com/",
            title: "Github",
        },
    ];
    return buttonLinks.map((item) => (
        <Link href={item.link} key={Math.random() * 99}>
            <button style={styles.btn} className={_styles.btn}>
                {item.title}
            </button>
        </Link>
    ));
}
