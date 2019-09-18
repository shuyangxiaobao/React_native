//
//  TestController.m
//  Reactgqb
//
//  Created by geqiangbao on 2019/1/24.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "TestController.h"

@interface TestController ()

@end

@implementation TestController

- (void)viewDidLoad {
    [super viewDidLoad];
  
//  UIView * v = [[UIView alloc]init];
//  v.backgroundColor = [UIColor redColor];
//  v.frame = [UIScreen mainScreen].bounds;
//  
//  UILabel * label = [[UILabel alloc]initWithFrame:[UIScreen mainScreen].bounds];
//  label.backgroundColor = [UIColor orangeColor];
//  label.text = @"这是一个自定义的ViewOne";
//  [v addSubview:label];
//  
//  //添加一个按钮
//  UIButton * btn = [[UIButton alloc]init];
//  [btn setTitle:@"我是按钮" forState:(UIControlStateNormal)];
//  [btn setTitle:@"我被点击了!" forState:(UIControlStateHighlighted)];
//  btn.backgroundColor = [UIColor greenColor];
//  [btn addTarget:self action:@selector(btnClick) forControlEvents:(UIControlEventTouchUpInside)];
//  btn.frame = CGRectMake(100, 100, 150, 150);
//  [v addSubview:btn];
//  
//  //添加一个按钮
//  UIButton * button = [[UIButton alloc]init];
//  [button setTitle:@"ios调用RN" forState:(UIControlStateNormal)];
//  [button setTitle:@"我被点击了!" forState:(UIControlStateHighlighted)];
//  button.backgroundColor = [UIColor greenColor];
//  [button addTarget:self action:@selector(click:) forControlEvents:(UIControlEventTouchUpInside)];
//  button.frame = CGRectMake(100, 300, 150, 150);
//  [v addSubview:button];
    // Do any additional setup after loading the view from its nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (IBAction)back:(UIButton *)sender {
  [self.navigationController popViewControllerAnimated:YES];
}


- (IBAction)jumpToRN:(UIButton *)sender {
  
  NSLog(@"跳转到RN模块");
  if (self.NativeToRN) {
    self.NativeToRN();
  }
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
