import request from 'utils/newRequest';

interface IParams {
    eventhubName: string,
    file: Array<File>,
}

export const send = async (params: IParams) => {
    const formData = new FormData();
    formData.append('file', params.file[0]);
    // const blobUrl = URL.createObjectURL(params.file[0]);
    const result = await request.post<any>('/sendFile',
    {'file': params.file[0].raw},
        {
            headers: {
                eventhubName: params.eventhubName,
                'Content-Type': 'multipart/form-data',
            }
        }
    );
    return result;
}