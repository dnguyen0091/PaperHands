import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate, type To } from 'react-router-dom';


export default function NavigationBar() {
    const [navOpen, setNavOpen] = useState(false);

    const navRef = useRef(null);
    const navigate = useNavigate();

    const handleNavigation = (path: To) => {
        navigate(path);
        setNavOpen(false);
    }

    // Animation variants for dropdowns
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: [0.42, 0, 0.58, 1]
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: [0, 0, 0.2, 1]
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -10,
            transition: {
                duration: 0.15
            }
        },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: index * 0.05,
                duration: 0.2,
                ease: [0, 0, 0.2, 1]
            }
        })
    };

    // Handle clicks outside to close dropdowns
    // useEffect(() => {
    //     function handleClickOutside(event: { target: string; }) {
    //         if (navRef.current && !navRef.current.contains(event.target)) {
    //             setNavOpen(false);
    //         }
    //     }

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    const handleNavigateClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        setNavOpen(!navOpen);
    }


    const navigationItems = [
        { label: 'Home', path: '/' },
        { label: 'Algorithm Coding', path: '/coding' },
        { label: 'Search', path: '/search' },
        { label: 'Account', path: '/account' }
    ];


    return(
        <>
            <div className="flex flex-row justify-between items-center w-[20vw] h-[5vh] z-[1000] top-5 left-[40vw] gap-[5vw] border-[var(--tertiary)] border-2 rounded-[5rem] bg-[var(--secondary)] p-5 sticky">
            <div className="dropDown relative cursor-pointer" ref={navRef} onClick={handleNavigateClick}>
                Navigate

                <AnimatePresence>
                    {navOpen && (
                        <motion.div 
                            className="navigateDropDown absolute top-full left-0 mt-4 z-50"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >                            <motion.div className="bg-[var(--secondary)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm min-w-[200px]">
                                {/* Menu Items */}
                                <div className="py-2">
                                    {navigationItems.map((item, index) => (
                                        <motion.div
                                            key={item.path}
                                            custom={index}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            onClick={() => handleNavigation(item.path)}
                                            whileHover={{ 
                                                backgroundColor: "var(--tertiary)",
                                                x: 8
                                            }}
                                            className="px-4 py-3 cursor-pointer transition-all duration-200 flex items-center gap-3 group"
                                        >
                                            <motion.div 
                                                className="w-2 h-2 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] font-medium">
                                                {item.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
        </>
    )
}