'use client';
import classes from './Nav.module.css';
import Tags from "./Tags";
import { useContext } from 'react';
import { CategoriesContext } from '@/app/store/CategoriesContext';
import TagsCategories from './TagsCategories';
import NavTop from './NavTop';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export default function Nav() {

    const { isVisible, whichIsVisible, toggleIsVisible } = useContext(CategoriesContext);

    function handleMouseOver() {
        toggleIsVisible(true);
    }
    function handleMouseOut() {
        toggleIsVisible(false);
    }

    return (
        <nav className={classes.nav}>
            <div>
                <NavTop />
            </div>
            <div className={classes.navMainHeaderBottom}>
                <div className={classes.NavCategoriesOpenArea} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Tags />
                    <hr />
                    <AnimatePresence>
                        <motion.div className={(isVisible && whichIsVisible !== undefined) ? classes.shown : classes.hidden}
                            animate={{ height: (isVisible && whichIsVisible !== undefined) ? 120 : 0 }}
                            layout
                            transition={{ delay: 0.4, duration: 0.1 }}>
                            <AnimatePresence>
                                <motion.div
                                    animate={{ opacity: (isVisible && whichIsVisible !== undefined) ? 1 : 0 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ delay: 0.4, duration: 0.1 }}>
                                    <TagsCategories />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}

//<Input id="itemSearch" placeholder="Search for Items" className="searchInput" />

/*  10:50AM

'use client';
import classes from './Nav.module.css';
import Tags from "./Tags";
import { useContext } from 'react';
import { CategoriesContext } from '@/app/store/CategoriesContext';
import TagsCategories from './TagsCategories';
import NavTop from './NavTop';

export default function Nav() {

    const { isVisible,whichIsVisible, toggleIsVisible } = useContext(CategoriesContext);

    function handleMouseOver() {
        toggleIsVisible(true);
    }
    function handleMouseOut() {
        toggleIsVisible(false);
    }
    console.log("<Nav/>");

    return (
        <nav className={classes.nav}>
            <div className={classes.navMainHeader}>
                <NavTop/>
            </div>
            <div className={classes.navMainHeaderBottom}>
                <div className={classes.NavCategoriesOpenArea} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Tags />
                    <hr />
                    <div className={(isVisible && whichIsVisible !== undefined) ? classes.shown : classes.hidden}>
                        <TagsCategories />
                    </div>
                </div>
            </div>
        </nav>
    );
}

*/