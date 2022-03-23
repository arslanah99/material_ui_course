import { ExpandMore } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Collapse, Typography } from "@mui/material";
import { useState } from "react";

function CardExample() {
    const [expanded, setExpanded] = useState(false);
    const handleExpand = () => setExpanded(!expanded);

    const cards = [
        {
            title: "Kakashi",
            description:
                "kakashi is a ninja who is the leader of the village of Konoha",
            image: "https://cdn.pixabay.com/photo/2020/11/29/16/00/naruto-5788207__340.png",
            credit: "https://pixabay.com/users/haticeerol-14967706/"
        },

        {
            title: "Naruto",
            description:
                "naruto is a ninja who is the leader of the village of Konoha",
            image: "https://cdn.pixabay.com/photo/2020/11/25/22/23/naruto-5777376_1280.png",
            credit: "https://pixabay.com/users/haticeerol-14967706/"
        },
        {
            title: "Itachi Uchiha",
            description: "Itachi is a spy for the village of Konoha",
            image: "https://cdn.pixabay.com/photo/2020/11/27/22/07/naruto-5783103_1280.png",
            credit: "https://pixabay.com/users/haticeerol-14967706/"
        },
        {
            title: "Sasuke Uchiha",
            description: "Sasuke is the shadow hokage of Naruto",
            image: "https://cdn.pixabay.com/photo/2020/11/30/22/08/naruto-5792426_1280.png",
            credit: "https://pixabay.com/users/haticeerol-14967706/"
        },
        {
            title: "Madara",
            description:
                "SUSSY BAKA",
            image: "https://cdn.pixabay.com/photo/2021/10/14/09/16/madara-6708478_1280.jpg",
            credit: "https://pixabay.com/users/mylifeeasy-23851580/"
        }
    ];

    return (
        <div>
            <div
                className="grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gridGap: "1rem",
                    justifyItems: "center",
                    alignItems: "center",
                    margin: "1rem",
                    padding: "1rem"
                }}
            >
                {cards.map((card) => (
                    <Card style={{ maxWidth: 200 }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {card.title}
                            </Typography>
                        </CardContent>
                        <CardMedia image={card.image} component="img" />
						<ExpandMore onClick={handleExpand}/>
						<Collapse in={expanded}>
							<CardContent>
								<Typography variant="body2" component="p">
									{card.description}
								</Typography>
								<Button
									variant="contained"
									color="primary"
									href={card.credit}
									target="_blank"
								>
									Credit
								</Button>
								</CardContent>
							</Collapse>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default CardExample;
