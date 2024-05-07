import ButtonCustom from '@components/ButtonCustom';
import Icon from '@components/Icon';
import ImageCustom from '@components/ImageCustom';
import Row from '@components/Row';
import TextDefault from '@components/TextDefault';
import { blackColor, borderColor, btnPrimary, priceColor, secondaryColor, whiteColor } from '@constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { vndToUsd } from '@helper/helpers';
import { navigate } from '@navigation/NavigationService';
import { ROUTE_KEY } from '@navigation/route';
import { localImages } from 'assets/localImage';
import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IFood } from 'src/Models/food.model';

type PropsType = {
   width: any;
   data: IFood;
};
function FoodItem({ width = 250, data }: PropsType) {
   const { _id, name, distanceInfo, lstImgs, address, rangePrice } = data;

   const thumbnails = useCallback(() => {
      return lstImgs && lstImgs?.length > 0
         ? lstImgs[0]
         : 'https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock.jpg';
   }, [lstImgs]);

   return (
      <Row direction="column" style={[{ width: width, height: 170, borderRadius: 30 }]}>
         <TouchableOpacity onPress={() => navigate(ROUTE_KEY.DETAIL_FOOD, { _id: _id, distanceIF: distanceInfo })}>
            <ImageCustom link={thumbnails()} style={{ borderRadius: 10, height: 120 }} />
         </TouchableOpacity>
         <Row
            style={{
               backgroundColor: borderColor,
               padding: 10,
               transform: [{ translateY: -25 }],
               borderBottomEndRadius: 10,
               borderBottomStartRadius: 10,
            }}
         >
            <Row start full direction="column" style={{ overflow: 'hidden' }}>
               <TextDefault
                  bold
                  style={{ fontSize: 18, width: '70%', overflow: 'hidden' }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
               >
                  {name}
               </TextDefault>
               <Row direction="column" start colGap={4}>
                  <TextDefault numberOfLines={1} ellipsizeMode="tail">
                     {address}
                  </TextDefault>
                  <Row start colGap={4}>
                     <TextDefault style={{ color: priceColor, fontSize: 16 }} bold>
                        {vndToUsd(rangePrice[0] ?? 0) + '$'}{' '}
                     </TextDefault>
                     <TextDefault style={{ color: priceColor }}>-</TextDefault>
                     <TextDefault style={{ color: priceColor, fontSize: 16 }} bold>
                        {vndToUsd(rangePrice[1] ?? 0) + '$'}{' '}
                     </TextDefault>
                  </Row>
                  <TextDefault>{distanceInfo && distanceInfo.distanceInKilometers}km</TextDefault>
               </Row>
            </Row>
         </Row>
      </Row>
   );
}

export default memo(FoodItem);
