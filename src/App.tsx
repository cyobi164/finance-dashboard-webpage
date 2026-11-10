import { useState } from "react";
import DashboardPreview from "./DashboardPreview";
import "./App.css";

function App() {
    const [showDashBoard, setShowDashboard] = useState(false)

    if(showDashBoard) {
        return(
            <div>
                <button 
                    className = "back-to-back"
                    onClick={() => setShowDashboard(false)}
                >
                     ← Back to Dashboard
                </button>

                <DashboardPreview />
            </div>
        )

    }

    return(
        <div className="landing-page">
            <nav className="landing-nav">
                <a href="#" className="landing-brand">
                    <span className="brand-icon">D</span>
                    <span>Dash<span className="brand-light">Board</span></span>
                </a>

                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                </div>

                <button
                    className="nav-cta"
                    onClick={() => setShowDashboard(true)}
                >
                 Explore demo ↗
                </button>
            </nav>

            <main>
                <section className="hero" id="about">
                    <div className="hero-content">
                        <span className="hero-lable">
                            PERSONAL FINANCE, DEMO
                        </span>

                        <h1>
                            Take control of
                            <br />
                            Your money.
                            <br / >
                            <span>Build your future</span>
                        </h1>

                        <p>
                            A simpler way to Understand your spending,
                            manage your budget, and reach your savings goals.
                        </p>

                        <div className="hero-actions">
                            <button
                                className="hero-primary"
                                onClick={() => setShowDashboard(true)}
                            >
                                Explore Dashboard ↗
                            </button>

                            <a href="#features" className="hero-secondary">
                                Discover features ↓
                            </a>
                        </div>

                        <div className="hero-note">
                            <span className="note-dot" />
                            Personal finance dashboard concept
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="visual-card">
                            <span className="visual-lable">YOUR FINANCES, AT A GLANCE</span>
                            <div className="visual-balance">
                                <span>Total Balance</span>
                                <strong>¥1,000,000</strong>
                                <small>↗ 8.2% this month</small>
                            </div>

                            {/*income*/}
                            <div className="visual-bottom">
                                <span>Income</span>
                                <strong>¥200,000</strong>
                            </div>
                        </div>

                        <div className="visual-bars">
                            {[35, 55, 43, 72, 58, 85, 67, 95,
                                74, 88, 63, 100].map(
                                    (height, index) => (
                                        <span
                                            key={index}
                                            style={{height: `${height}%`}}
                                        />
                                    )
                                )}
                        </div>
                    </div>
                    <div className="visual-decoration" />
                </section>

                <section className="features-section" id="features">
                    <div className="section-heading">
                        <span>WHAT YOU CAN DO</span>
                        <h2>Everything in one place</h2>
                        <p>
                            Stay organized and make more informed decisions
                            about your money.
                        </p>
                    </div>

                    <div className="features-grid">
                        <article className="features-card">
                            <span className="fratures-icon">↗</span>
                            <h3>Track Transactions</h3>
                            <p>
                                Keep track of your income and expenses
                                in one place.
                            </p>
                        </article>

                        <article className="features-card">
                            <span className="features-icon">◷</span>
                            <h3>Manage budgets</h3>
                            <p>
                                Understand your spending habits and 
                                keep monthly budget in check.
                            </p>
                        </article>

                        <article className="features-card">
                            <span className="features-icon">◎</span>
                            <h3>Reach savings goals</h3>
                            <p>
                                Monitor your progress and stay focused
                                on your financial goals.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="demo-cta">
                    <span>READY TO EXPLORE?</span>
                    <h2>Your money. Your goals. Your progress.</h2>
                    <p>Take a closer look at the dashboard</p>
                    <button
                        className="hero-primary"
                        onClick={() => setShowDashboard(true)}
                    >
                        Open Dashboard Demo
                    </button>
                </section>
            </main>

            <footer className="landing-footer">
                <a href="#" className="landing-brand">
                    <span className="brand-icon">D</span>
                    <span>Dash<span className="brand-light">Board</span></span>
                </a>
                <span>© 2026 Finance Portfolio project.</span>
            </footer>
        </div>
    )
}

export default App