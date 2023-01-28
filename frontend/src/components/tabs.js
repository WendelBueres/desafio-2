import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";

export default function TabsComponent({ value, setValue }) {
    function handleChangeTabs(event, newValue) {
        return setValue(newValue);
    };

    return (
        <div className="box">
            <Box sx={{ maxWidth: { xs: 500, sm: 480 } }}>
                <Tabs
                    value={value}
                    onChange={handleChangeTabs}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Requisição" />
                    <Tab label="Operações" />
                    <Tab label="Empresas" />
                </Tabs>
            </Box>
        </div>
    )
}