import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {LeaderDBType} from "../../../types/main";
import Button from "../../atomic/CustomButton/CustomButton";
import CustomModal from "../../atomic/Modal/CustomModal";
import Container from "@mui/material/Container";

interface DataTableType extends Omit<LeaderDBType, 'name'> {
    i?: number,
    leader: LeaderDBType
}

// @ts-ignore
const Leaderboard = ({allLeaders, handleAction}) => {

    const [viewLeader, setViewLeader] = useState<LeaderDBType>();

    const [tableDataSet, setTableDataSet] = useState<DataTableType[]>([]);
    const [openLeaderViewModal, setOpenLeaderViewModal] = useState<boolean>(false);

    useEffect(() => {
        let dataSet: DataTableType[] = [];
        allLeaders?.forEach((leader: LeaderDBType, index: number) => {
            dataSet.push({
                i: ++index,
                id: leader.id,
                leader: leader,
                age: leader.age,
                points: leader.points,
                address: leader.address,
                created_at: leader.created_at,
                updated_at: leader.updated_at
            });
        });
        setTableDataSet(dataSet);
    }, [allLeaders]);

    const viewLeaderHandler = (leader: LeaderDBType) => {
        setViewLeader(leader);
        setOpenLeaderViewModal(true);
    }

    const LeaderViewModal = () => {
        return <CustomModal
            open={openLeaderViewModal}
            onClose={() => setOpenLeaderViewModal(false)}
        >
            <Container>
                <Stack>
                    Name: {viewLeader?.name}
                </Stack>
                <Stack>
                    Age: {viewLeader?.age}
                </Stack>
                <Stack>
                    Points: {viewLeader?.points}
                </Stack>
                <Stack>
                    Address: {viewLeader?.address}
                </Stack>
            </Container>
        </CustomModal>
    };

    const LeaderboardRender = () => {
        const columns = React.useMemo(
            () => [
                {
                    name: "i",
                    label: "#",
                    options: {
                        filter: false,
                        sort: false,
                    }
                },
                {
                    name: "id",
                    label: 'Action',
                    options: {
                        filter: false,
                        sort: false,
                        customBodyRender: (id: number) => {
                            return <Stack>
                                {
                                    <Button label={'x'} onClick={(event) => {
                                        handleAction(id, 'delete_leader');
                                    }}
                                    />
                                }
                            </Stack>;
                        }
                    }
                },
                {
                    name: "leader",
                    label: "Name",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (leader: LeaderDBType) => {
                            return <Stack onClick={() => viewLeaderHandler(leader)}>
                                <Typography>{leader.name}</Typography>
                            </Stack>;
                        }
                    }
                },
                {
                    name: "points",
                    label: "Points",
                    options: {
                        customBodyRender: (points: string) => {
                            return <Stack>
                                <Typography>{points}</Typography>
                            </Stack>;
                        }
                    }
                },
                {
                    name: "id",
                    label: "Action",
                    options: {
                        filter: false,
                        sort: false,
                        customBodyRender: (id: number) => {
                            return <Stack>
                                {
                                    <>
                                        <Button label={'+'} onClick={(event) => {
                                            handleAction(id, 'increase_leader_score');
                                        }}
                                        />
                                        <Button label={'-'} onClick={(event) => {
                                            handleAction(id, 'decrease_leader_score');
                                        }}
                                        />
                                    </>
                                }
                            </Stack>;
                        }
                    }
                },
            ],
            [],
        );

        const tableOptions = {
            selectableRowsHideCheckboxes: true,
            // onRowClick: (rowData: any, rowMeta: any) => {
            //     console.log(rowData);
            // }
        };


        return (
            <MUIDataTable
                title={"Leaderboard"}
                data={tableDataSet}
                columns={columns}
                options={tableOptions}
            />
        )
    };
    return <>
        <LeaderViewModal/>
        <LeaderboardRender/>
    </>;
};

export default Leaderboard;
