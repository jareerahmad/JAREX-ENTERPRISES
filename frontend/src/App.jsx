import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminRoute from "./admin/AdminRoute";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProjects from "./admin/AdminProjects";
import AdminMessages from "./admin/AdminMessages";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Reveal from "./components/Reveal";
import ScrollToTop from "./components/ScrollToTop";
import PageLayout from "./components/PageLayout";

import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import AllProjects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";


function Home() {

    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <Reveal>
                    <Introduction />
                </Reveal>

                <Reveal delay={0.05}>
                    <Services />
                </Reveal>

                <Reveal delay={0.05}>
                    <Projects />
                </Reveal>

                <Reveal delay={0.05}>
                    <About />
                </Reveal>

                <Reveal delay={0.05}>
                    <Contact />
                </Reveal>
            </main>

            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <div className="jarex-texture min-h-screen bg-[#050706] text-[#F3F5F3]">
                <CustomCursor />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/about"
                        element={
                            <PageLayout>
                                <AboutPage />
                            </PageLayout>
                        }
                    />

                    <Route
                        path="/services"
                        element={
                            <PageLayout>
                                <ServicesPage />
                            </PageLayout>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <PageLayout>
                                <ContactPage />
                            </PageLayout>
                        }
                    />

                    <Route
                        path="/projects"
                        element={
                            <PageLayout>
                                <AllProjects />
                            </PageLayout>
                        }
                    />

                    <Route
                        path="/projects/:slug"
                        element={
                            <PageLayout>
                                <ProjectDetails />
                            </PageLayout>
                        }
                    />

                    <Route path="/help" element={<PageLayout><Help /></PageLayout>} />
                    <Route path="/privacy" element={<PageLayout><Privacy /></PageLayout>} />

                    <Route path="*" element={<NotFound />} />

                    <Route path="/login" element={<PageLayout><Login /></PageLayout>} />
                    <Route path="/register" element={<PageLayout><Register /></PageLayout>} />
                    <Route path="/profile" element={<PageLayout><Profile /></PageLayout>} />


                    <Route element={<AdminRoute />}>
                        <Route element={<AdminLayout />}>
                            <Route
                                path="/admin"
                                element={<AdminDashboard />}
                            />

                            <Route
                                path="/admin/projects"
                                element={<AdminProjects />}
                            />

                            <Route
                                path="/admin/messages"
                                element={<AdminMessages />}
                            />
                        </Route>
                    </Route>


                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;