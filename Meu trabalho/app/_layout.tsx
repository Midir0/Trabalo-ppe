import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
    
        name="Index"
        options={{
   
        href: 'Index',
      }}
      />
         <Tabs.Screen
    
        name="Home"
        options={{

        href: 'Home',
      }}
      />
      <Tabs.Screen
    
      name="index"
      options={{

      href: null,
      }}
      />
        <Tabs.Screen
    
        name="telaB"
        options={{

        href: null,
      }}
      />
        <Tabs.Screen
    
        name="telaC"
        options={{

        href: null,
      }}
      />
    </Tabs>
  );
}