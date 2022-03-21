import { AnalyticsOutlined, EmailOutlined, FaceTwoTone, Javascript, PhoneAndroid } from "@mui/icons-material";
import { Chip, ListItem, Paper } from "@mui/material";
import { useState } from "react";

function ChipsExample() {
    const [chipData, setChipData] = useState([
        {key: 0, label: "Angular", color: "red", icon: <AnalyticsOutlined />},
        {key: 1, label: "React", color: "blue", icon: <EmailOutlined />},
        {key: 2, label: "Wordpress", color: "grey", icon: <FaceTwoTone />},
        {key: 3, label: "PHP", color: "pink", icon: <PhoneAndroid />},
        {key: 4, label: "Java", color: "black", icon: <Javascript />},

    ])

    const onDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    }
    const onClick = () => {
        
    }
    return (
      <div className="ChipsExample">
                  <Paper
              sx={{
                  display: "flex",
                  justifyContent: "center"
              }}
              >
          {chipData.map((data) => {
              return (
                  <ListItem key={data.key}>
                      <Chip 
                        icon={data.label === "Angular" ? undefined : data.icon}
                        label={data.label === "React" ? "NOT REACT" : data.label}
                        onDelete={data.label === "PHP" ? undefined : onDelete(data)}
                        style={{backgroundColor: data.color}}
                      />
                  </ListItem>
              )
          })}
          </Paper>
      </div>
    );
  }
  
  export default ChipsExample;
  