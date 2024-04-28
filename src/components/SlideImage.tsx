import PagerView from 'react-native-pager-view';
import { View, Image } from 'react-native';
import { useRef } from 'react';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

type PropType = {
   images: string[];
   onPressImage: () => void;
};
function SlideImage({ images, onPressImage }: PropType) {
   const slide = useRef<PagerView | null>(null);
   return (
      <PagerView ref={slide} style={{ flex: 1, height: '100%', width: '100%' }}>
         {images.map((img, index) => (
            <View style={[]} key={index}>
               <TouchableOpacity onLongPress={onPressImage}>
                  <Image
                     source={{ uri: img }}
                     style={{
                        width: '100%',
                        height: '100%',
                     }}
                  />
               </TouchableOpacity>
            </View>
         ))}
      </PagerView>
   );
}

export default SlideImage;
