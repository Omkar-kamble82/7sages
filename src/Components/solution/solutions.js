import "./solution.css";

import { useRef,useEffect, useState } from "react";

const Solutions = () => {

    const Solution1 = useRef();
    const Solution2 = useRef();
    const Solution3 = useRef();
    const Solution4 = useRef();
    const Solution5 = useRef();
    const Solution6 = useRef();
    const [solution1,setSolution1] = useState();
    const [solution2,setSolution2] = useState();
    const [solution3,setSolution3] = useState();
    const [solution4,setSolution4] = useState();
    const [solution5,setSolution5] = useState();
    const [solution6,setSolution6] = useState();

    useEffect(() => {
        const observer1 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSolution1(entry.isIntersecting)
        })
        observer1.observe(Solution1.current)

        const observer2 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSolution2(entry.isIntersecting)
        })
        observer2.observe(Solution2.current)

        const observer3 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSolution3(entry.isIntersecting)
        })
        observer3.observe(Solution3.current)

        const observer4 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSolution4(entry.isIntersecting)
        })
        observer4.observe(Solution4.current)

        const observer5 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSolution5(entry.isIntersecting)
        })
        observer5.observe(Solution5.current)

        const observer6 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setSolution6(entry.isIntersecting)
        })
        observer6.observe(Solution6.current)
        
    },[])

    return (
        <div className="solutions">
            <div className="solution" ref={Solution1}>
                <div><img className={`solution-img hidden ${solution1 ? "show":""}`} src="/resources/images/solutions/smartanalytics.jpg" alt="Smart-Analytics" /></div>
                <div className={`solution-des hiddenright ${solution1 ? "showright":""}`}>
                    <p className="solution-des-heading">Smart Dashboard Analytics</p>
                    <p className="solution-des-content">Business reports are transformed into intelligent dashboard analytics, enabling fast and smart decision making. We create customized dashboards based on client requirements</p>
                    <img className="img1" src="/resources/images/solutions/1.png" alt="shape" />
                    <img className="img2" src="/resources/images/solutions/2.png" alt="shape" />
                </div>
            </div>
            <div className="solution reverse" ref={Solution2}>
                <div><img className={`solution-img hiddenright ${solution2 ? "showright":""}`} src="/resources/images/solutions/ecommarket.png" alt="ecommarket" /></div>
                <div className={`solution-des hidden ${solution2 ? "show":""}`}>
                    <p className="solution-des-heading">E-com Market Assessment</p>
                    <p className="solution-des-content">Using AI-powered tools and machine learning techniques, we estimate online category market size with appropriate scale. This allows brand owners to understand the market in greater detail and also analyse the competition much better</p>
                    <img className="img3" src="/resources/images/solutions/3.png" alt="shape" />
                    <img className="img4" src="/resources/images/solutions/4.png" alt="shape" />
                </div>
            </div>
            <div className="solution" ref={Solution3}>
                <div><img className={`solution-img hidden ${solution3 ? "show":""}`} src="/resources/images/solutions/ecomopportunity.png" alt="business-experience" /></div>
                <div className={`solution-des hiddenright ${solution3 ? "showright":""}`}>
                    <p className="solution-des-heading">E-commerce Opportunity Analyses</p>
                    <p className="solution-des-content">‘Category White-spacing’ is a special module created to do key multi-variate analysis and study important market segments. This helps to identify opportunities for brands to sharpen their marketing strategies and use the right options for success</p>
                    <img className="img1" src="/resources/images/solutions/5.png" alt="shape" />
                    <img className="img2" src="/resources/images/solutions/6.png" alt="shape" />
                </div>
            </div>
            <div className="solution reverse" ref={Solution4}>
                <div><img className={`solution-img hiddenright ${solution4 ? "showright":""}`} src="/resources/images/solutions/searchresult.png" alt="Search-result" /></div>
                <div className={`solution-des hidden ${solution4 ? "show":""}`}>
                    <p className="solution-des-heading">Search Results Analyses / SOV</p>
                    <p className="solution-des-content">Search advertising is a critical tool for every brand to generate demand across e-com marketplaces and generic search platforms. We have an AI powered smart search solution which can dynamically fetch real-time search rankings with ‘organic & sponsored’ distinction. This helps brand to improvise their search advertising strategies and create positive impact on business</p>
                    <img className="img3" src="/resources/images/solutions/7.png" alt="shape" />
                    <img className="img4" src="/resources/images/solutions/8.png" alt="shape" />
                </div>
            </div>
            <div className="solution" ref={Solution5}>
                <div><img className={`solution-img hidden ${solution5 ? "show":""}`} src="/resources/images/solutions/pricing.png" alt="ecommarket" /></div>
                <div className={`solution-des hiddenright ${solution5 ? "showright":""}`}>
                    <p className="solution-des-heading">Pricing, Promo Tracking & Analyses</p>
                    <p className="solution-des-content">Tracking price and promotion for numerous SKUs of any product becomes cumbersome and time-consuming. Our pricing & promo tracking tool not only reports data on time but can also set smart alerts through emails when there’s a change in pricing of brand or competition</p>
                    <img className="img1" src="/resources/images/solutions/9.png" alt="shape" />
                    <img className="img2" src="/resources/images/solutions/10.png" alt="shape" />
                </div>
            </div>
            <div className="solution reverse" ref={Solution6}>
                <div><img className={`solution-img hiddenright ${solution6 ? "showright":""}`} src="/resources/images/solutions/stockalert.png" alt="business-experience" /></div>
                <div className={`solution-des hidden ${solution6 ? "show":""}`}>
                    <p className="solution-des-heading">Out-of-Stock Alerts & Analyses</p>
                    <p className="solution-des-content">Being ‘In-Stock’ is critical to any business and ‘OOS’ (Out of Stock) is lost opportunity. Simple, yet smart our solution powered by AI can track stock status dynamically and set custom email alerts to help quick decision making. This helps businesses improve their operational efficiency in managing their inventories</p>
                    <img className="img3" src="/resources/images/solutions/11.png" alt="shape" />
                    <img className="img4" src="/resources/images/solutions/12.png" alt="shape" />
                </div>
            </div>
        </div>
    )
}

export default Solutions;