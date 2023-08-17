import { React, useEffect, useState } from "react";
import { Link, Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/material";
import { api, image_api } from "../../Api";


const Staff_Card = (props) => {
    const [data, setData] = useState();
    const [isError, setIsError] = useState();
    useEffect(() => {
        axios
            .get(`${api}/people/${props.name}/read`)
            .then((response) => setData(response.data))
            .catch((error) => setIsError(error.message));
        if (!isError) {
            setIsError("Not Available");
        }
    }, []);
    console.log(data);
    return (
        <>
            <Container sx={{ display: { xs: "none", md: "block" } }}>
                {data &&
                    data.map((item, i) => (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    px: 3,
                                    my: 3,
                                    width: "100%",
                                    borderBottom: "1px solid #ccc",
                                }}
                            >
                                <Box sx={{ p: 2 }}>
                                    <img
                                        alt=""
                                        width="90"
                                        src={`${image_api}${item.image}`}
                                        loading="lazy"
                                    />
                                </Box>
                                <Box sx={{ p: 2, width: "100%" }}>
                                    <Link href={item.link}>
                                        <Typography variant="h3">{item.name}</Typography>
                                    </Link>
                                    <Typography color="grey" variant="p" fontSize="0.8rem">
                                        Ph.D, IIT Indore
                                    </Typography>

                                    <br />
                                    <br />
                                    <Typography
                                        color="secondary.main"
                                        fontStyle="italic"
                                        variant="p"
                                    >
                                        {item.title}
                                    </Typography>

                                    {/* <Typography variant="h6">{item.role1}</Typography> */}
                                    <Typography variant="h6">{item.department}</Typography>
                                    {/* <br /> */}

                                    <Box>
                                        <Typography color="gray" fontSize="0.8rem">
                                            <Typography variant="p" fontWeight="600">
                                                Research Focus:
                                            </Typography> {item.details}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ p: 2, width: "40%" }}>
                                    <Typography fontSize="0.8rem">
                                        Phone: {item.phone ? item.phone : 1234567890}
                                    </Typography>
                                    <Typography fontSize="0.8rem">
                                        Email: <a href={`mailto:${item.email}`}><Typography variant='body' fontSize={"0.8rem"} color="secondary.main"> {item.email}</Typography></a>
                                    </Typography>
                                    <Typography fontSize="0.8rem">
                                        Address:{item.address}
                                    </Typography>
                                </Box>
                            </Box>
                        </>
                    ))}
            </Container>

            <Box sx={{ display: { xs: "block", md: "none" }, textAlign: "center" }}>
                {data?.map((item, i) => (
                    <>
                        <Paper
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                py: 2,
                                m: 2,
                            }}
                        >
                            <Box>
                                <img
                                    alt=''
                                    width="110"
                                    height="169"
                                    src={`${image_api}${item.image}`}
                                    loading="lazy"
                                />
                            </Box>
                            <Box>
                                <Link href={item.link}>
                                    <Typography variant="h3">{item.name}</Typography>
                                </Link>
                                <Typography
                                    color="secondary.main"
                                    fontStyle="italic"
                                    variant="p"
                                >
                                    {item.title}
                                </Typography>
                                <Typography fontWeight="600">Research Interest:</Typography>
                                <Box>
                                    <Typography color="gray" fontSize="0.8rem">
                                        <Typography variant="p" fontWeight="600">
                                            Research Focus:
                                        </Typography> {item.details}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontSize="0.8rem">
                                    Email: <a href={`mailto:${item.email}`}><Typography variant='body' fontSize={"0.8rem"} color="secondary.main"> {item.email}</Typography></a>
                                </Typography>
                                <Typography fontSize="0.8rem">
                                    Address:{item.address}
                                </Typography>
                            </Box>
                        </Paper>
                    </>
                ))}
            </Box>
        </>
    );
};

export default Staff_Card;
