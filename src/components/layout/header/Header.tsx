"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  Drawer,
  IconButton,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { LogOut, MenuIcon, UserRound } from "lucide-react";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname, useRouter } from "next/navigation";

import {
  clearAuthSession,
  getStoredUser,
  logoutUser,
  UserProfile,
} from "@/lib/api";

interface HeaderProps {
  activePage?: "home" | "about" | "services" | "doctors" | "contact";
}

export default function Header({
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const hideHeaderRoutes = ["/login", "/signup"];

  const navLinks = [
    { label: "Home", href: "/", key: "home" },
    { label: "About", href: "/about", key: "about" },
    { label: "Services", href: "/services", key: "services" },
    { label: "Doctors", href: "/doctors", key: "doctors" },
    { label: "Contact", href: "/contact", key: "contact" },
  ];

  useEffect(() => {
    const syncUser = () => setUser(getStoredUser());

    syncUser();
    window.addEventListener("authChanged", syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("authChanged", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch {
      // Local logout should still complete if the token is expired.
    } finally {
      clearAuthSession();
      setOpen(false);
      router.push("/login");
    }
  };

  const userInitial = user?.name?.charAt(0).toUpperCase() || "U";

  if (hideHeaderRoutes.includes(pathname)) {
    return null;
  }

  const authActions = user ? (
    <div className="group relative">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d9e75] text-sm font-bold text-white transition hover:bg-[#178a65]"
        aria-label="Open user menu"
      >
        {userInitial}
      </button>

      <div className="invisible absolute right-0 z-50 mt-2 w-56 rounded-lg border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
        <div className="border-b border-slate-100 px-4 py-3">
          <p className="truncate text-sm font-semibold text-slate-900">
            {user.name}
          </p>
          <p className="truncate text-xs text-slate-500">{user.email}</p>
        </div>

        <Link
          href="/profile"
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 no-underline transition hover:bg-emerald-50 hover:text-[#1d9e75]"
        >
          <UserRound size={16} />
          Profile
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  ) : (
    <>
      <Link href="/login">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#1d9e75",
            color: "#1d9e75",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Login
        </Button>
      </Link>

      <Link href="/signup">
        <Button
          variant="contained"
          sx={{
            bgcolor: "#1d9e75",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "8px",
            "&:hover": {
              bgcolor: "#0f6e56",
            },
          }}
        >
          Sign Up
        </Button>
      </Link>
    </>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          bgcolor: "#fff",
          color: "#1a1a2e",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Toolbar className="px-4 md:px-8 lg:px-12 flex justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 no-underline"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1d9e75] flex items-center justify-center">
              <LocalHospitalIcon
                sx={{ color: "#fff", fontSize: 18 }}
              />
            </div>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontFamily: "Playfair Display, serif",
                color: "#1a1a2e",
              }}
            >
              MediCare Pro
            </Typography>
          </Link>

          <Box className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`
    text-sm
    no-underline
    font-bold
    transition-colors
    duration-300
    ${pathname === link.href
                    ? "text-[#1d9e75]"
                    : "text-gray-600 hover:text-[#1d9e75]"
                  }
  `}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          <Box className="hidden lg:flex items-center gap-3">
            {authActions}
          </Box>

          <Box className="flex lg:hidden">
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar >

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: {
              xs: 280,
              sm: 320,
            },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 1.5,
              borderBottom: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1a1a2e",
              }}
            >
              Menu
            </Typography>

            <IconButton
              onClick={() => setOpen(false)}
              aria-label="close menu"
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 2,
            }}
          >
            <Stack spacing={1}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium no-underline transition-all duration-200 ${isActive
                      ? "bg-green-100 text-[#1d9e75]"
                      : "text-gray-600 hover:bg-green-50 hover:text-[#1d9e75]"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </Stack>
          </Box>

          <Box
            sx={{
              p: 2,
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <Stack spacing={2}>
              {user ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-[#1d9e75] no-underline"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d9e75] text-white">
                      {userInitial}
                    </span>
                    Profile
                  </Link>

                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={handleLogout}
                    sx={{
                      borderColor: "#dc2626",
                      color: "#dc2626",
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: "8px",
                      py: 1.2,
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                  >
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        borderColor: "#1d9e75",
                        color: "#1d9e75",
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: "8px",
                        py: 1.2,
                        "&:hover": {
                          borderColor: "#1d9e75",
                          backgroundColor: "#ecfdf5",
                        },
                      }}
                    >
                      Login
                    </Button>
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: "#1d9e75",
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: "8px",
                        py: 1.2,
                        "&:hover": {
                          bgcolor: "#0f6e56",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </Stack>
          </Box>
        </Box>
      </Drawer>

    </>
  );
}
