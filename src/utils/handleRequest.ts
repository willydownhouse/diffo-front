import offerApi from '../api/offerApi';

export function handleRequest(
  kilometers: number,
  hours: number,
  kmPrice: number,
  hoursPrice: number,
  offer: number,
  setNotification: (val: string) => void,
  setDistanceCost: (val: number) => void,
  setTimeCost: (val: number) => void,
  setIncome: (val: number) => void,
  setProfit: (val: number) => void
) {
  offerApi
    .post('/offers', {
      km: kilometers,
      hours,
      km_price: kmPrice,
      h_price: hoursPrice,
      offer,
    })
    .then(res => {
      console.log(res.data);

      const { distance_costs, time_costs, offer, profit } = res.data;

      setDistanceCost(distance_costs);
      setTimeCost(time_costs);
      setIncome(offer);
      setProfit(profit);
    })
    .catch(err => {
      if (err.name === 'AxiosError') {
        setNotification(err.response.data.message);
        setTimeout(() => setNotification(''), 3000);
      }
    });
}
