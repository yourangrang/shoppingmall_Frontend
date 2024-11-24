import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const HistoryPage = () => {
    const userData = useSelector(state => state.user?.userData);

    // 날짜와 시간까지 포함하여 주문 데이터를 그룹화
    const groupByDateTime = (history) => {
        const groupedData = {};

        history.forEach(item => {
            // 날짜와 시간까지 비교 (초 단위 포함)
            const dateTime = dayjs(item.dateOfPurchase).format('YYYY-MM-DD HH:mm:ss'); 

            if (!groupedData[dateTime]) {
                groupedData[dateTime] = { items: [], total: 0 }; // 각 그룹에 items와 total 추가
            }

            // 해당 그룹에 아이템 추가
            groupedData[dateTime].items.push(item);
            // 해당 그룹의 가격 합계 계산
            groupedData[dateTime].total += item.price * item.quantity;
        });

        return groupedData;
    };

    const groupedHistory = groupByDateTime(userData?.history || []);

    return (
        <section>
            <div className='text-center m-7'>
                <h2 className='text-2xl font-bold'>주문내역</h2>
            </div>

            <div className='w-full text-sm text-left text-gray-500'>
                <div>
                    {Object.keys(groupedHistory).map(dateTime => (
                        <div key={dateTime} className='border-2 rounded-lg mb-10 px-4 py-2 border-black'>
                                <div className="font-semibold text-lg text-gray-700 ">
                                    {dateTime}
                                </div>
                                {/* 해당 날짜와 시간의 주문 내역들 출력 */}
                                {groupedHistory[dateTime].items.map(item => (
                                    <ul key={item.paymentId} className='border-b flex p-2 relative'>
                                        <li>    
                                        {/* 첫 번째 이미지만 출력 */}
                                        {item.images && item.images.length > 0 && (
                                            <img 
                                                key={0} // 첫 번째 이미지만 가져오므로 고유값은 0
                                                src={`${import.meta.env.VITE_SERVER_URL}/${item.images[0]}`} // 첫 번째 이미지 URL 사용
                                                alt={`상품 이미지 1`} // 첫 번째 이미지 설명
                                                className="w-20 h-20 object-cover"
                                            />
                                        )}
                                    </li>
                                        <li className='absolute left-28  top-4 font-bold text-black'>{item.name}</li>
                                        <li className='absolute left-28  top-9'>{item.price} 원</li>
                                        <li className='absolute left-28  top-14'>{item.quantity} 개</li>
                                    </ul>
                                ))}
                                <div className="text-right font-bold pt-3 text-black">
                                    총 결제: {groupedHistory[dateTime].total} 원
                                </div>
                            </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
};

export default HistoryPage;
