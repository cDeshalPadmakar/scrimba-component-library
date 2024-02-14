import React from "react"
import Card from "../Card/index"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiFilm } from "react-icons/fi"
import { FaBookReader } from "react-icons/fa"
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs"
import { SiScrimba } from "react-icons/si";

export default function CardSection() {
    const codeString = `
Props
In Card
   * backgroundColor = "specify color" (optional, defaults to light gray)
   * You can pass additional props supported by html <div> element
In Card.Icon
   * backgroundColor = "specify color" (optional, defaults to blue color)
   * You can specify icon as children prop. Defaults to smiley face
In Card.Title and Card.Text
   * color = "specify color", (optional, Card.Title defaults to black, Card.Text defaults to light gray)
   * You can pass additional props supported by html <div> element
eg. 👇

<Card>
    <Card.Icon></Card.Icon>
    <Card.Title>Card title goes here</Card.Title>
    <Card.Text>Card text goes here</Card.Text>
</Card>

<Card>
    <Card.Icon><SiScrimba /></Card.Icon>
    <Card.Title>Card title goes here</Card.Title>
    <Card.Text>Card text goes here</Card.Text>
</Card>

<Card backgroundColor="black">
    <Card.Icon backgroundColor="rgb(223, 129, 242)">👨‍💻</Card.Icon>
    <Card.Title color="white">Card title goes here</Card.Title>
    <Card.Text>Card text goes here</Card.Text>
</Card>

`
    return (
        <div className="card-section section">
            <div className="container">
                <h2>Card component</h2>
                <section className="demo">
                    <Card>
                        <Card.Icon backgroundColor=""></Card.Icon>
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
                    </Card>
                    <Card>
                        <Card.Icon backgroundColor="red"><FiFilm /></Card.Icon>
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
                    </Card>
                    <Card>
                        <Card.Icon backgroundColor="limegreen"><FaBookReader /></Card.Icon>
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
                    </Card>
                    <Card>
                        <Card.Icon backgroundColor="lightsalmon"><BsFillEmojiSmileUpsideDownFill /></Card.Icon>
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
                    </Card>
                </section>
                <section>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                        {codeString}
                    </SyntaxHighlighter>
                </section>
                <section className="demo">
                    <Card>
                        <Card.Icon></Card.Icon>
                        <Card.Title>Card title goes here</Card.Title>
                        <Card.Text>Card text goes here</Card.Text>
                    </Card>

                    <Card>
                        <Card.Icon><SiScrimba /></Card.Icon>
                        <Card.Title>Card title goes here</Card.Title>
                        <Card.Text>Card text goes here</Card.Text>
                    </Card>

                    <Card backgroundColor="black">
                        <Card.Icon backgroundColor="rgb(223, 129, 242)">👨‍💻</Card.Icon>
                        <Card.Title color="white">Card title goes here</Card.Title>
                        <Card.Text>Card text goes here</Card.Text>
                    </Card>
                </section>
            </div>
        </div>
    )
}

