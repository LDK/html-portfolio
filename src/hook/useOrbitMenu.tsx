import { Box, Typography } from "@mui/material";
import { useState } from "react";

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

  const OrbitMenu = () => {
    const OrbitButton = ({ index, href, label }: OrbitButtonProps) => (
      <Typography sx={{ cursor: 'pointer' }} pt={{ md: 1 }} pb={1} my={0} href={href} onClick={() => { setActiveLink(label) }} component="a" className={
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

  return { OrbitMenu, activeLink };
}

export default useOrbitMenu;