<?php

namespace App\Services\ParamConverter;

use App\Model\PaginatedRequestModel;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterInterface;
use Symfony\Component\HttpFoundation\Request;

class PostsParamConverter implements ParamConverterInterface
{
    public function apply(Request $request, ParamConverter $configuration)
    {

        $requestModel = (new PaginatedRequestModel())
            ->setCurrentPage($request->query->get('page'))
            ->setSortOrder($request->query->get('ordby'))
            ->setSortBy($request->query->get('sortby'))
            ->setRowsPerPage($request->query->get('results'));

        $request->attributes->set($configuration->getName(), $requestModel);
    }

    public function supports(ParamConverter $configuration)
    {
        return $configuration->getClass() === PaginatedRequestModel::class;
    }
}
