import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {LeaderDBType} from "../../../types/main";
import Button from "../../atomic/CustomButton/CustomButton";

interface DataTableType extends LeaderDBType {
    i?: number
}

// @ts-ignore
const Leaderboard = ({allLeaders, handleAction, isLoading}) => {

    const [tableDataSet, setTableDataSet] = useState<LeaderDBType[]>([]);

    useEffect(() => {
        console.log("Leaderboard Organisms => ", allLeaders);
        let dataSet: DataTableType[] = [];
        allLeaders?.forEach((leader: LeaderDBType, index: number) => {
            dataSet.push({
                i: ++index,
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
                                    <Button disabled={isLoading} label={'x'} onClick={(event) => {
                                        handleAction(id, 'delete_leader');
                                    }}
                                    />
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
                                        <Button disabled={isLoading} label={'+'} onClick={(event) => {
                                            handleAction(id, 'increase_leader_score');
                                        }}
                                        />
                                        <Button disabled={isLoading} label={'-'} onClick={(event) => {
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
    return (<LeaderboardRender/>);
};

export default Leaderboard;
