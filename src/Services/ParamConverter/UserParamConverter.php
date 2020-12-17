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
        $user = (new UserRegistrationModel())
            ->setNickname($request->request->get('nickname'))
            ->setPassword($request->request->get('password'))
            ->setEmail($request->request->get('email'));
        $request->attributes->set($configuration->getName(), $user);
    }

    public function supports(ParamConverter $configuration): bool
    {
        return $configuration->getClass() === UserRegistrationModel::class;
    }
}
