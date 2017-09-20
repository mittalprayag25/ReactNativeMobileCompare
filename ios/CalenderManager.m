//
//  CalenderManager.m
//  ReactNativeLearn
//
//  Created by Prayag Mittal on 20/09/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "CalenderManager.h"
#import <React/RCTLog.h>


@implementation CalenderManager

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
