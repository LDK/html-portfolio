import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useOrbitMenu = (defaultActive?:string) => {
  interface OrbitButtonProps {
    index: number;
    href: string;
    label: string;
  }

  type OrbitMenuItemProps = Omit<OrbitButtonProps, 'index'>;

  const menuItems: OrbitMenuItemProps[] = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];
  
  const [activeLink, setActiveLink] = useState(defaultActive || 'About');

  const navigate = useNavigate();

  const onClick = (label: string, href:string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(label);
    navigate(href);
  }

  const OrbitMenu = () => {
    useEffect(() => {
      // Set the active link based on the current path, chopping off the leading slash and converting to title case
      setActiveLink(window.location.pathname.slice(1).split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'About');
      // Scroll to the top of the page when the active link changes
      window.scrollTo(0, 0);
    }, [window.location.pathname]);
  
  
    const OrbitButton = ({ index, href, label }: OrbitButtonProps) => (
      <Typography component="a" href={href} sx={{ cursor: 'pointer' }} pt={{ md: 1 }} pb={1} my={0} onClick={(e) => { onClick(label, href, e) }} className={
        `menu-button btn--${index}${label === activeLink ? ' active' : ''}`
        }>
        {label}
      </Typography>
    );

    return (
      <Box className="orbit-menu-container">
        <div className="curved-frame">
        </div>
        <div className="curved-menu">

        <Typography className="mobile-title" component="span" gutterBottom color="white" fontWeight={400} display={{ xs: 'inline', md: 'none' }}>
                Daniel Swinney
              </Typography>
          {menuItems.map((item, idx) => (
            <OrbitButton key={`btn-${idx + 1}`} {...{index: idx + 1, ...item}} />
          ))}
        </div>
      </Box>
    );
  }

  // A mobile version of the menu that is a simple top bar with all the sections laid out horizontally as links
  const MobileMenu = () => (
    <Box className="mobile-menu" sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-around', alignItems: 'center', width: '100%', height: '3rem' }}>
      <Typography fontWeight={600} pr={1} pl={1} color="white" display={{ xs: 'none', sm: 'inline' }}>Daniel Swinney</Typography>
      {menuItems.map((item, idx) => (
        <Typography px={{ xs: 1, sm: 2 }} key={`btn-${idx + 1}`} color="white" component="a" href={item.href} sx={{ cursor: 'pointer' }} pt={1} pb={1} my={0} onClick={(e) => { onClick(item.label, item.href, e) }} className={
          `${item.label === activeLink ? ' active' : ''}`
          }>
          {item.label}
        </Typography>
      ))}
    </Box>
  );

  return { OrbitMenu, activeLink, MobileMenu };
}

export default useOrbitMenu;