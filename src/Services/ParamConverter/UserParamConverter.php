<?php

namespace App\Services\ParamConverter;

use App\Model\UserRegistrationModel;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterInterface;
use Symfony\Component\HttpFoundation\Request;

class UserParamConverter implements ParamConverterInterface
{
    public function apply(Request $request, ParamConverter $configuration)
    {
        $requestData = json_decode($request->getContent(), true);
        $user = (new UserRegistrationModel())
            ->setNickname($requestData['nickname'])
            ->setPassword($requestData['password'])
            ->setEmail($requestData['email']);
        $request->attributes->set($configuration->getName(), $user);
    }

    public function supports(ParamConverter $configuration): bool
    {
        return $configuration->getClass() === UserRegistrationModel::class;
    }
}
