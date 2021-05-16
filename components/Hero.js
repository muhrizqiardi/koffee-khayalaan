function Hero({children}) {
    return (
        <section className="hero-bg ">
            <div className="hero flex-column">
                {children}
            </div>
        </section>
    );
}
export default Hero;
