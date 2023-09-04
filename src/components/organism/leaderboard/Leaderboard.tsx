import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {LeaderDBType} from "../../../types/main";
import Button from "@mui/material/Button";

// @ts-ignore
const Leaderboard = ({allLeaders}) => {

    const [tableDataSet, setTableDataSet] = useState<LeaderDBType[]>([]);

    useEffect(() => {
        console.log("Leaderboard Organisms => ", allLeaders);
        let dataSet: LeaderDBType[] = [];
        allLeaders?.forEach((leader: LeaderDBType, index: number) => {
            dataSet.push({
                id: leader.id,
                name: leader.name,
                age: leader.age,
                points: leader.points,
                address: leader.address,
                created_at: leader.created_at,
                updated_at: leader.updated_at
            });
        });
        setTableDataSet(dataSet);
    }, [allLeaders]);

    const deleteLeader = (id: number) => {
        console.log("Delete Leader ID => ", id);
    };

    const LeaderboardRender = () => {
        const columns = React.useMemo(
            () => [
                {
                    name: "id",
                    label: "Action",
                    options: {
                        customBodyRender: (id: number) => {
                            return <Stack>
                                {
                                    <Button
                                        onClick={(event) => {
                                            deleteLeader(id);
                                        }}
                                    >
                                    </Button>
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
                }
            ],
            [],
        );

        const tableOptions = {
            selectableRowsHideCheckboxes: true,
            // onRowClick: (rowData, rowMeta) => {
            //     setSelectedClinic(clinicList[tableDataSet[rowMeta.dataIndex].id - 1]);
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
    return (<LeaderboardRender/>);
};

export default Leaderboard;
