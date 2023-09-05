import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {LeaderDBType} from "../../../types/leaderboardTypes";
import CustomModal from "../../atomic/Modal/CustomModal";
import DeleteIcon from '@mui/icons-material/Delete';
import PlusIcon from '@mui/icons-material/Add';
import MinusIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";
import ViewLeader from "./ViewLeader";

interface DataTableType extends LeaderDBType {
    i?: number,
    leader?: LeaderDBType
}

export interface LeaderBoardType {
    allLeaders: DataTableType[],
    handleAction: (id: number, context: string) => void
}

const Leaderboard = ({allLeaders, handleAction}: LeaderBoardType) => {

    const [viewLeader, setViewLeader] = useState<LeaderDBType>();

    const [tableDataSet, setTableDataSet] = useState<DataTableType[]>([]);
    const [openLeaderViewModal, setOpenLeaderViewModal] = useState<boolean>(false);

    useEffect(() => {
        let dataSet: DataTableType[] = [];
        allLeaders?.forEach((leader: LeaderDBType, index: number) => {
            dataSet.push({
                i: ++index,
                id: leader.id,
                name: leader.name,
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
            <ViewLeader leaderData={viewLeader}/>
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
                            return <Stack direction="row" alignItems="center">
                                {
                                    <Stack mr={3}>
                                        <IconButton aria-label="increase a point" size="small" onClick={() => {
                                            handleAction(id, 'delete_leader');
                                        }}>
                                            <DeleteIcon color={"error"}/>
                                        </IconButton>
                                    </Stack>
                                }
                            </Stack>;
                        }
                    }
                },
                {
                    name: "name",
                    label: "Name",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (name: String, metadata: any) => {
                            return <Stack
                                onClick={() => viewLeaderHandler(metadata.rowData[4])}
                            >
                                <Typography>{name}</Typography>
                            </Stack>;
                        },
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
                    name: "leader",
                    label: "Action",
                    options: {
                        filter: false,
                        sort: false,
                        customBodyRender: (leader: LeaderDBType) => {
                            return <Stack direction="row" alignItems="center">
                                <Stack mr={3}>
                                    <IconButton aria-label="increase a point" size="small" onClick={() => {
                                        handleAction(leader.id, 'increase_leader_score');
                                    }}>
                                        <PlusIcon color="primary"/>
                                    </IconButton>
                                </Stack>
                                <Stack>
                                    <IconButton aria-label="decerese a point" size="small" onClick={() => {
                                        handleAction(leader.id, 'decrease_leader_score');
                                    }}>
                                        <MinusIcon color="primary"/>
                                    </IconButton>
                                </Stack>
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
