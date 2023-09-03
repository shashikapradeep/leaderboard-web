import * as React from 'react';
import MUIDataTable from 'mui-datatables';
//import {useAppDispatch} from '../../../state/hook';
import {useSelector} from "react-redux";
import {RootState} from "../../../state/store";
//import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {LeaderDBType} from '../../../types/main';

export default function () {

    //const dispatch = useAppDispatch();
    const leaderboardList = useSelector((state: RootState) => state.leaderboard.leadersList);
    //const navigate = useNavigate();

    const [tableDataSet, setTableDataSet] = useState<LeaderDBType[]>([]);

    useEffect(() => {
        // dispatch(resetClinicForm('all'));
        // dispatch(setIsLoading(true));
        // dispatch(fetchClinicList());
    }, []);

    useEffect(() => {
        let dataSet: LeaderDBType[] = [];
        leaderboardList?.forEach((leader: LeaderDBType, index: number) => {
            dataSet.push({
                id: ++index,
                name: leader.name,
                age: leader.age,
                points: leader.points,
                address: leader.address,
                created_at: leader.created_at,
                updated_at: leader.updated_at
            });
        });
        setTableDataSet(dataSet);
    }, [leaderboardList]);

    const LeaderboardRender = () => {
        const columns = React.useMemo(
            () => [
                {
                    name: "rowId",
                    label: "#",
                    options: {
                        filter: false,
                        sort: false,
                        options: {
                            customBodyRender: (rowId: number) => {
                                return <Stack>
                                    <Typography>`${rowId}. `</Typography>
                                </Stack>;
                            }
                        }
                    }
                },
                {
                    name: "name",
                    label: "Clinic",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "start_at",
                    label: "Start",
                    options: {
                        customBodyRender: (start_at: string) => {
                            return <Stack>
                                <Typography>{start_at}</Typography>
                            </Stack>;
                        }
                    }
                },
                {
                    name: "end_at",
                    label: "End",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "per_person_time",
                    label: "P.P. (min)",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "appointments",
                    label: "Appointments",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (data: any) => {
                            return <Stack>
                                <Typography>{data.booked} / {data.total}</Typography>
                            </Stack>;
                        }
                    }
                },
                {
                    name: "provider",
                    label: "Provider",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "published_at",
                    label: "Published",
                    options: {
                        filter: true,
                        sort: true,
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
