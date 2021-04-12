import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>


                {/* /* {title eg - coronavirus cases} */}
                <Typography className="infoBox_title" color="textSecondary"> {title} </Typography>

                {/* {no of cases} */}

                <h2 className="InfoBox_cases"> {cases} </h2>

                {/* {1.2M total} */}

                <Typography className="infoBox_total" color="textSecondary"> {total} </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox;
