// import React from "react"
import Header from "./Header"
import BadgeSection from "./BadgeSection"
import BannerSection from "./BannerSection"
import CardSection from "./CardSection"
import TestimonialSection from "./TestimonialSection"
import TooltipSection from "./TooltipSection"
import ToastSection from "./ToastSection"

export default function Main() {
    return (
        <div>
            <Header />
            <BadgeSection />
            <BannerSection />
            <CardSection />
            <TestimonialSection />
            <TooltipSection />
            <ToastSection />
        </div>
    )
}